import {
  Building,
  CreateBuildingDTO,
  CreateBuildingDTOSchema,
  UpdateBuildingDTO,
  UpdateBuildingDTOSchema,
  BoxStructure,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BuildingProxy extends WritableProxy<Building, CreateBuildingDTO, UpdateBuildingDTO> {
  protected get _route(): string {
    return 'buildings';
  }

  public async create(data: CreateBuildingDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Building> {
    const parsedData = CreateBuildingDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Building['id'],
    data: UpdateBuildingDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateBuildingDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }

  public async getStructure(id: Building['id'], options?: Parameters<Api['get']>[0]['options']): Promise<BoxStructure> {
    const [topology, design] = await Promise.all([
      this.apiInstance.get<BoxStructure['topology']>({
        route: `base-boxes/${id}/topology`,
        options,
      }),
      this.apiInstance.get<BoxStructure['design']>({
        route: `base-boxes/${id}/design`,
        options,
      }),
    ]);

    return { topology, design };
  }

  public async updateStructure(
    id: Building['id'],
    data: BoxStructure,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    return this.apiInstance.patch({
      route: `base-boxes/${id}/structure`,
      inputData: { structure: data },
      options,
    });
  }
}

export default BuildingProxy;
