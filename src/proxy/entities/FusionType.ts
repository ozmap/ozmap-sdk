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

  public async create({
    data,
    options,
  }: {
    data: CreateFusionTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<FusionType> {
    const parsedData = CreateFusionTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: FusionType['id'];
    data: UpdateFusionTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateFusionTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default FusionTypeProxy;
