import Api from '../util/Api';
import UpdatableProxy from './UpdatableProxy';
import { BaseModel } from '../interface';

abstract class WritableProxy<Record, CreateDTO, UpdateDTO> extends UpdatableProxy<Record, UpdateDTO> {
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

  public async deleteById({
    id,
    options,
  }: {
    id: BaseModel['id'];
    options?: Parameters<Api['delete']>[0]['options'];
  }): Promise<void> {
    return this.apiInstance.delete({
      route: `${this._route}/${id}`,
      options,
    });
  }
}

export default WritableProxy;
