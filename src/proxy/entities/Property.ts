import {
  Property,
  CreatePropertyDTO,
  CreatePropertyDTOSchema,
  UpdatePropertyDTO,
  UpdatePropertyDTOSchema,
  ApiFilter,
  ApiFilterSchema,
  BatchUpdatePropertyDTO,
  BatchUpdatePropertyDTOSchema,
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

  public async batchUpdate(
    filter: ApiFilter[] | ApiFilter[][] | Array<ApiFilter | ApiFilter[]>,
    data: BatchUpdatePropertyDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<void> {
    const parsedFilter = ApiFilterSchema.parse(filter);
    const parsedData = BatchUpdatePropertyDTOSchema.parse(data);

    return this.apiInstance.post({
      route: `${this._route}/batch-update`,
      inputData: { filter: parsedFilter, data: parsedData },
      options,
    });
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
