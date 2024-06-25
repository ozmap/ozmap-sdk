import {
  CreateDuctTypeDTO,
  DuctType,
  CreateDuctTypeDTOSchema,
  UpdateDuctTypeDTO,
  UpdateDuctTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class DuctTypeProxy extends WritableProxy<DuctType, CreateDuctTypeDTO, UpdateDuctTypeDTO> {
  protected get _route(): string {
    return 'duct-types';
  }

  public async create(data: CreateDuctTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<DuctType> {
    const parsedData = CreateDuctTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: DuctType['id'],
    data: UpdateDuctTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateDuctTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default DuctTypeProxy;
