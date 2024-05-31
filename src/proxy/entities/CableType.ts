import {
  CableType,
  CreateCableTypeDTO,
  CreateCableTypeDTOSchema,
  UpdateCableTypeDTO,
  UpdateCableTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class CableTypeProxy extends WritableProxy<CableType, CreateCableTypeDTO, UpdateCableTypeDTO> {
  protected get _route(): string {
    return 'CableType-types';
  }

  public async create(data: CreateCableTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<CableType> {
    const parsedData = CreateCableTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: CableType['id'],
    data: UpdateCableTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateCableTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default CableTypeProxy;
