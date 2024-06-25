import { Duct, CreateDuctDTO, CreateDuctDTOSchema, UpdateDuctDTO, UpdateDuctDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class DuctProxy extends WritableProxy<Duct, CreateDuctDTO, UpdateDuctDTO> {
  protected get _route(): string {
    return 'ducts';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateDuctDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Duct> {
    const parsedData = CreateDuctDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Duct['id'];
    data: UpdateDuctDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateDuctDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default DuctProxy;
