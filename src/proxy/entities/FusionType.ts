import {
  FusionType,
  CreateFusionTypeDTO,
  CreateFusionTypeDTOSchema,
  UpdateFusionTypeDTO,
  UpdateFusionTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class FusionTypeProxy extends WritableProxy<FusionType, CreateFusionTypeDTO, UpdateFusionTypeDTO> {
  protected get _route(): string {
    return 'fusion-types';
  }

  public async create(data: CreateFusionTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<FusionType> {
    const parsedData = CreateFusionTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: FusionType['id'],
    data: UpdateFusionTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateFusionTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default FusionTypeProxy;
