import { Box, CreateBoxDTO, CreateBoxDTOSchema, UpdateBoxDTO, UpdateBoxDTOSchema, BoxStructure } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BoxProxy extends WritableProxy<Box, CreateBoxDTO, UpdateBoxDTO> {
  protected get _route(): string {
    return 'boxes';
  }

  public async create(data: CreateBoxDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Box> {
    const parsedData = CreateBoxDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Box['id'],
    data: UpdateBoxDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateBoxDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }

  public async getStructure(id: Box['id'], options?: Parameters<Api['get']>[0]['options']): Promise<BoxStructure> {
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
    id: Box['id'],
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

export default BoxProxy;
