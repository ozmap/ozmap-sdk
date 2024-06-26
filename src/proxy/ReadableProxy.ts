import Pagination from '../interface/Pagination';
import Proxy from './Proxy';
import Api from '../util/Api';
import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import { BaseModel } from '../interface';

abstract class ReadableProxy<Record> extends Proxy {
  protected abstract get _route(): string;

  public constructor(api: Api) {
    super(api);
  }

  public async find(options?: Omit<Parameters<Api['get']>[0], 'route'>): Promise<Pagination<Record>> {
    return this.apiInstance.get<Pagination<Record>>({
      route: this._route,
      ...options,
    });
  }

  public async findById(
    id: BaseModel['id'],
    options?: Omit<Parameters<Api['get']>[0], 'route' | 'page' | 'limit' | 'filter' | 'sorter'>,
  ): Promise<Record | null> {
    try {
      return await this.apiInstance.get<Record>({
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
