import Pagination from '../interface/Pagination';
import Proxy from './Proxy';
import Api from '../util/Api';
import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import { BaseModel } from '../interface';

abstract class ReadableProxy<ProxyRecord> extends Proxy {
  protected abstract get _route(): string;

  public constructor(api: Api) {
    super(api);
  }

  public async find(options?: Omit<Parameters<Api['get']>[0], 'route'>): Promise<Pagination<ProxyRecord>> {
    return this.apiInstance.get<Pagination<ProxyRecord>>({
      route: this._route,
      ...options,
    });
  }

  public async findOne(options?: Omit<Parameters<Api['get']>[0], 'route'>): Promise<ProxyRecord | null> {
    const {
      rows: [ProxyRecord],
    } = await this.apiInstance.get<Pagination<ProxyRecord>>({
      route: this._route,
      ...options,
      limit: 1,
    });

    return ProxyRecord || null;
  }

  protected extractParamsFromUrl(nextUrl?: string): Record<string, string> {
    if (!nextUrl) {
      return {};
    }

    const fakeBase = 'http://fake-url';
    const urlObj = new URL(nextUrl, fakeBase);
    const paramsObj: Record<string, string> = {};

    urlObj.searchParams.forEach((value, key) => {
      paramsObj[key] = value;
    });

    return paramsObj;
  }

  public async findAll(
    options?: Omit<Parameters<Api['get']>[0], 'route' | 'limit' | 'page'> & { batchSize?: number },
  ): Promise<ProxyRecord[]> {
    const limit = options?.batchSize || 100;
    const allData = [];

    let currentData: ProxyRecord[] = [];
    let hasNext = false;
    let nextParams = {};

    do {
      const fetchResult = await this.apiInstance.get<Pagination<ProxyRecord>>({
        route: this._route,
        ...options,
        options: {
          ...(options?.options || {}),
          params: nextParams,
        },
        limit,
      });

      currentData = fetchResult.rows;
      hasNext = fetchResult.hasNextPage;
      nextParams = this.extractParamsFromUrl(fetchResult.nextUrl);

      allData.push(...currentData);
    } while (hasNext);

    return allData;
  }

  public async findById(
    id: BaseModel['id'],
    options?: Omit<Parameters<Api['get']>[0], 'route' | 'page' | 'limit' | 'filter' | 'sorter'>,
  ): Promise<ProxyRecord | null> {
    try {
      return await this.apiInstance.get<ProxyRecord>({
        ...options,
        route: `${this._route}/${id}`,
      });
    } catch (error: unknown) {
      const axiosError = error as AxiosError;
      if (axiosError?.status === StatusCodes.NOT_FOUND) {
        return null;
      }

      throw error;
    }
  }
}

export default ReadableProxy;
