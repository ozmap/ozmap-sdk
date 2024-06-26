import { PON, CreatePONDTO, CreatePONDTOSchema, UpdatePONDTO, UpdatePONDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PONProxy extends WritableProxy<PON, CreatePONDTO, UpdatePONDTO> {
  protected get _route(): string {
    return 'pons';
  }

  public async create(data: CreatePONDTO, options?: Parameters<Api['post']>[0]['options']): Promise<PON> {
    const parsedData = CreatePONDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: PON['id'],
    data: UpdatePONDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePONDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PONProxy;
