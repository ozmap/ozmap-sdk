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

  public async create(data: CreatePropertyDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Property> {
    const parsedData = CreatePropertyDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Property['id'],
    data: UpdatePropertyDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePropertyDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PropertyProxy;
