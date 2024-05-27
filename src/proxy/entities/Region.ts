import {
  Region,
  CreateRegionDTO,
  CreateRegionDTOSchema,
  UpdateRegionDTO,
  UpdateRegionDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class RegionProxy extends WritableProxy<Region, CreateRegionDTO, UpdateRegionDTO> {
  protected get _route(): string {
    return 'regions';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateRegionDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Region> {
    const parsedData = CreateRegionDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Region['id'];
    data: UpdateRegionDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateRegionDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default RegionProxy;
