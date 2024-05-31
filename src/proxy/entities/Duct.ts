import { CreateDuctDTO, Duct, CreateDuctDTOSchema, UpdateDuctDTO, UpdateDuctDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class DuctProxy extends WritableProxy<Duct, CreateDuctDTO, UpdateDuctDTO> {
  protected get _route(): string {
    return 'ducts';
  }

  public async create(data: CreateDuctDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Duct> {
    const parsedData = CreateDuctDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Duct['id'],
    data: UpdateDuctDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateDuctDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default DuctProxy;
