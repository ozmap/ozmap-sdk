import { OLT, CreateOLTDTO, CreateOLTDTOSchema, UpdateOLTDTO, UpdateOLTDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class OLTProxy extends WritableProxy<OLT, CreateOLTDTO, UpdateOLTDTO> {
  protected get _route(): string {
    return 'olts';
  }

  public async create(data: CreateOLTDTO, options?: Parameters<Api['post']>[0]['options']): Promise<OLT> {
    const parsedData = CreateOLTDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: OLT['id'],
    data: UpdateOLTDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateOLTDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default OLTProxy;
