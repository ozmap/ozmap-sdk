import {
  PoleType,
  CreatePoleTypeDTO,
  CreatePoleTypeDTOSchema,
  UpdatePoleTypeDTO,
  UpdatePoleTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PoleTypeProxy extends WritableProxy<PoleType, CreatePoleTypeDTO, UpdatePoleTypeDTO> {
  protected get _route(): string {
    return 'pole-types';
  }

  public async create(data: CreatePoleTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<PoleType> {
    const parsedData = CreatePoleTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: PoleType['id'],
    data: UpdatePoleTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePoleTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PoleTypeProxy;
