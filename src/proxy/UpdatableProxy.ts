import Api from '../util/Api';
import ReadableProxy from './ReadableProxy';
import { BaseModel } from '../interface';

abstract class UpdatableProxy<Record, UpdateDTO> extends ReadableProxy<Record> {
  public async updateById(
    id: BaseModel['id'],
    data: UpdateDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    // @ts-expect-error enviar o mesmo external_id causa erro, desativando update por enquanto
    data.external_id = undefined;

    return this.apiInstance.patch<UpdateDTO>({
      route: `${this._route}/${id}`,
      inputData: data,
      options,
    });
  }
}

export default UpdatableProxy;
