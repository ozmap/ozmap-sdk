import {
  BuildingType,
  CreateBuildingTypeDTO,
  CreateBuildingTypeDTOSchema,
  UpdateBuildingTypeDTO,
  UpdateBuildingTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BuildingTypeProxy extends WritableProxy<BuildingType, CreateBuildingTypeDTO, UpdateBuildingTypeDTO> {
  protected get _route(): string {
    return 'building-types';
  }

  public async create(
    data: CreateBuildingTypeDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<BuildingType> {
    const parsedData = CreateBuildingTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  updateById(
    id: BuildingType['id'],
    data: UpdateBuildingTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateBuildingTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default BuildingTypeProxy;
