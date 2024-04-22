import Api from '../util/Api';
import Pagination from '../interface/Pagination';

abstract class BaseProxy<Record, CreateDTO, UpdateDTO> {
  protected apiInstance: Api;

  protected abstract get _route(): string;

  protected constructor(api: Api) {
    this.apiInstance = api;
  }

  public async create({
    data,
    options,
  }: {
    data: CreateDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Record> {
    return this.apiInstance.post<CreateDTO, Record>({
      route: this._route,
      inputData: data,
      options,
    });
  }

  public async find(options?: Omit<Parameters<Api['get']>[0], 'route'>): Promise<Pagination<Record>> {
    return this.apiInstance.get<Pagination<Record>>({
      route: this._route,
      ...options,
    });
  }

  public async findById({
    id,
    options,
  }: {
    id: string;
    options?: Parameters<Api['get']>[0]['options'];
  }): Promise<Record> {
    return this.apiInstance.get({
      route: `${this._route}/${id}`,
      options,
    });
  }

  public async updateById({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdateDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    return this.apiInstance.patch<UpdateDTO>({
      route: `${this._route}/${id}`,
      inputData: data,
      options,
    });
  }

  public async deleteById({
    id,
    options,
  }: {
    id: string;
    options?: Parameters<Api['delete']>[0]['options'];
  }): Promise<void> {
    return this.apiInstance.delete({
      route: `${this._route}/${id}`,
      options,
    });
  }
}

export default BaseProxy;
