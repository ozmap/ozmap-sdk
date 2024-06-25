import {
  Building,
  CreateBuildingDTO,
  CreateBuildingDTOSchema,
  UpdateBuildingDTO,
  UpdateBuildingDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BuildingProxy extends WritableProxy<Building, CreateBuildingDTO, UpdateBuildingDTO> {
  protected get _route(): string {
    return 'buildings';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateBuildingDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Building> {
    const parsedData = CreateBuildingDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Building['id'];
    data: UpdateBuildingDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateBuildingDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default BuildingProxy;
