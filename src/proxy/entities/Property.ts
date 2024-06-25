import {
  Property,
  CreatePropertyDTO,
  CreatePropertyDTOSchema,
  UpdatePropertyDTO,
  UpdatePropertyDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PropertyProxy extends WritableProxy<Property, CreatePropertyDTO, UpdatePropertyDTO> {
  protected get _route(): string {
    return 'properties';
  }

  public async create({
    data,
    options,
  }: {
    data: CreatePropertyDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Property> {
    const parsedData = CreatePropertyDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Property['id'];
    data: UpdatePropertyDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePropertyDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PropertyProxy;
