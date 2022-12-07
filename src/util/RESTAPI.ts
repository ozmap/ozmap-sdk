import Logger from '../util/Logger';

const logger = Logger(__filename);

import IPagination from '../interface/IPagination';
import IReadQueryInput from '../interface/IReadQueryInput';
import IModel from '../interface/model/IModel';
import ObjectID from 'bson-objectid';
import IFilter from '../interface/IFilter';
import superagent = require('superagent');
import request = require('superagent');

class RESTAPI {
  private connected = false;
  private headers = {};
  readonly url: string;
  private key?: string;

  constructor(url: string, key?: string) {
    this.url = url;
    this.key = key;
    this.connected = false;
    if (key) {
      this.authentication();
    }
  }

  public async authentication(login?: string, password?: string): Promise<string | undefined | null> {
    logger.info(`Authentication called. username:${login}`);
    let failToUseAPIKey = false;

    try {
      await superagent.get(`${this.url}/api/v2/authenticated`).set(Object.assign({ Authorization: this.key }, this.headers)).send();
      this.connected = true;

      return this.key;
    } catch (err) {
      logger.warn('Fail to use the API-Key');
      failToUseAPIKey = true;
    }

    if (failToUseAPIKey) {
      try {
        const result = await superagent.post(`${this.url}/api/v2/users/login`).send({
          login: login,
          password: password,
        });

        this.key = result.body.authorization;
        this.connected = true;

        return this.key;
      } catch (e) {
        logger.info('Fail to login, username and/or password are wrong');
      }
    }
    this.connected = false;
    return null;
  }

  async create<T>(model: string, data: IModel): Promise<T> {
    const base_url = `${this.url}/api/v2/${model}?`;
    try {
      const result = await superagent.post(base_url).set(Object.assign({ Authorization: this.key }, this.headers)).send(data);

      return result.body as T;
    } catch (e) {
      logger.error(
        //@ts-ignore
        `Fail to create: Error: ${e.message}, StatusCode: ${e.status}`,
        { model, data },
      );
      throw e;
    }
  }

  async update(model: string, model_id: ObjectID, data: IModel): Promise<void> {
    const base_url = `${this.url}/api/v2/${model}/${model_id}`;

    try {
      await superagent.patch(base_url).set(Object.assign({ Authorization: this.key }, this.headers)).send(data);
    } catch (e) {
      logger.error(
        //@ts-ignore
        `Fail to update: Id: ${model_id} Error: ${e.message}, StatusCode: ${e.status}`,
        { model, data },
      );

      throw e;
    }
  }

  async delete<T>(model: string, model_id: ObjectID): Promise<T> {
    const base_url = `${this.url}/api/v2/${model}/${model_id}`;
    try {
      const result = await superagent.delete(base_url).set(Object.assign({ Authorization: this.key }, this.headers)).send();

      return result.body as T;
    } catch (e) {
      logger.error('Fail to delete: ', { model, model_id });
      throw e;
    }
  }

  async read<T extends IModel>(model: IReadQueryInput, query?: Record<string, unknown>): Promise<IPagination<T>> {
    if (model instanceof Object && model.constructor === Object) {
      return this._read(model);
    } else if (typeof model === 'string') {
      let filter: IFilter[] = [];

      if (query && Object.keys(query).length) {
        filter = Object.keys(query).map((el: string) => {
          return { property: el, operator: '=', value: query[el] };
        }) as IFilter[];
      }

      return this._read<T>({
        model: model,
        filter: filter,
      });
    }

    return {
      total: 0,
      rows: [],
      start: 0,
      count: 0,
      limit: 0,
    };
  }

  async _read<T extends IModel>({
    model,
    limit,
    page,
    filter,
    select,
    sort,
    populate,
  }: IReadQueryInput): Promise<IPagination<T>> {
    let body = {};
    let base_url = `${this.url}/api/v2/${model}?`;

    if (process.env.OZMAP_FILTER_MODE === 'URL') {
      if (filter) {
        if (!Array.isArray(filter)) {
          filter = [filter];
        }

        filter = this.encodeURIRecursive(filter) as IFilter[];
        // if(filter && filter.length) {
        //   filter[0].value = filter[0].value === "null" ? null : filter[0].value;
        // }
        base_url = `${base_url}&filter=${JSON.stringify(filter)}`;
      }
    } else {
      body = { filter };
    }

    if (select) {
      base_url = `${base_url}&select=${select}`;
    }

    if (limit != null) {
      base_url = `${base_url}&limit=${limit}`;
    }

    if (populate != null) {
      base_url = `${base_url}&populate=${populate}`;
    }

    if (page != null) {
      base_url = `${base_url}&page=${page}`;
    }
    if (sort != null) {
      base_url = `${base_url}&sort=${JSON.stringify(sort)}`;
    }
    try {
      const result = await superagent.get(base_url).set(Object.assign({ Authorization: this.key }, this.headers)).send(body);
      const ret = result.body as IPagination<T>;
      for (const iModel of ret.rows) {
        iModel.id = new ObjectID(iModel.id as unknown as string);
      }
      return ret;
    } catch (e) {
      logger.error('Fail to _read', { model, filter });
      throw e;
    }
  }

  public setHeaders(headers: object): this {
    this.headers = headers;

    return this;
  }

  encodeURIRecursive(filter: (IFilter | IFilter[])[]): unknown[] {
    return filter.map((el: IFilter | IFilter[]) => {
      if (Array.isArray(el)) {
        return this.encodeURIRecursive(el);
      } else {
        if (el.operator === 'near') {
          return el;
        } else if (Array.isArray(el.value)) {
          el.value = el.value.map((elOut: unknown) => {
            return encodeURIComponent(elOut as string | number | boolean);
          });

          return el;
        } else {
          return { ...el, value: encodeURIComponent(el.value as string) };
        }
      }
    });
  }

  async readById<T extends IModel>(model: string, model_id: ObjectID, select?: string): Promise<T> {
    let base_url = `${this.url}/api/v2/${model}/${model_id}?`;

    if (select) {
      base_url = `${base_url}&select=${select}`;
    }

    try {
      const result = await superagent.get(base_url).set(Object.assign({ Authorization: this.key }, this.headers)).send();

      return result.body as T;
    } catch (e) {
      logger.error('Fail to readById', { model, model_id, select });
      throw e;
    }
  }

  async fetchAllWithPagination<T extends IModel>({
    model,
    limit = 500,
    filter,
    populate,
    select,
    sort,
  }: IReadQueryInput): Promise<IPagination<T>> {
    let finished = false;
    let ret: Array<T> = [];
    let page = 1;

    try {
      while (!finished) {
        const read_page: Array<T> = (
          await this.read<T>({
            model,
            limit,
            page,
            filter,
            populate,
            select,
            sort,
          })
        ).rows;

        if (read_page.length) {
          ret = ret.concat(read_page);
        } else {
          finished = true;
        }

        page++;
      }
    } catch (e) {
      logger.error('Fail to fetchAllWithPagination', { model, filter, select });
      throw e;
    }

    return {
      rows: ret,
      total: ret.length,
      count: ret.length,
      start: 0,
      limit: -1,
    };
  }

  async customRequest(
    method = 'GET',
    v2_route = '',
    queryInput?: IReadQueryInput,
    data?: Record<string, unknown>,
  ): Promise<superagent.Response> {
    let base_url = `${this.url}/api/v2/${v2_route}`;
    let questionMark = '?';

    type K1 = keyof IReadQueryInput;

    // Callback type for superagent method callable
    type CallbackHandler = GenericFunction<[unknown, request.Response], void>;

    // Type of superagent method callable (GET, POST, ...)
    type Method = GenericFunction<[string, CallbackHandler?], request.Request>;

    for (const query_name in queryInput) {
      if (queryInput.hasOwnProperty(query_name)) {
        base_url = `${base_url}${questionMark}&${query_name}=${queryInput[query_name as K1]}`;
        questionMark = '';
      }
    }

    try {
      // Here we make the superagent.SuperAgentStatic indexable by string
      // in order to extract the Method callable
      const methodCallable = (superagent as unknown as Record<string, Method>)[method.toLowerCase()];

      return await methodCallable(base_url).set({ Authorization: this.key }).timeout(999999).send(data);
    } catch (e) {
      logger.error('Fail to customRequest', { method, data, queryInput });
      throw e;
    }
  }

  isConnected(): boolean {
    return this.connected;
  }
}

export default RESTAPI;
