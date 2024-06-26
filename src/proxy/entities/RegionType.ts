import {
  RegionType,
  CreateRegionTypeDTO,
  CreateRegionTypeDTOSchema,
  UpdateRegionTypeDTO,
  UpdateRegionTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class RegionTypeProxy extends WritableProxy<RegionType, CreateRegionTypeDTO, UpdateRegionTypeDTO> {
  protected get _route(): string {
    return 'region-types';
  }

  public async create(data: CreateRegionTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<RegionType> {
    const parsedData = CreateRegionTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: RegionType['id'],
    data: UpdateRegionTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateRegionTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default RegionTypeProxy;
