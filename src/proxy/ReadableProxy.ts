import Pagination from '../interface/Pagination';
import Proxy from './Proxy';
import Api from '../util/Api';

abstract class ReadableProxy<Record> extends Proxy {
  protected abstract get _route(): string;

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
}

export default ReadableProxy;
