import Api from '../util/Api';
import ReadableProxy from './ReadableProxy';

abstract class WritableProxy<Record, CreateDTO, UpdateDTO> extends ReadableProxy<Record> {
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

export default WritableProxy;
