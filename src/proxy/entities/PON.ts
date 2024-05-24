import { PON, CreatePONDTO, CreatePONDTOSchema, UpdatePONDTO, UpdatePONDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PONProxy extends WritableProxy<PON, CreatePONDTO, UpdatePONDTO> {
  protected get _route(): string {
    return 'pons';
  }

  public async create({
    data,
    options,
  }: {
    data: CreatePONDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<PON> {
    const parsedData = CreatePONDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: PON['id'];
    data: UpdatePONDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePONDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PONProxy;
