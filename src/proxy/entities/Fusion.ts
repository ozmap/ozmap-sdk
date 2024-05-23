import {
  Fusion,
  CreateFusionDTO,
  CreateFusionDTOSchema,
  UpdateFusionDTO,
  UpdateFusionDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class FusionProxy extends WritableProxy<Fusion, CreateFusionDTO, UpdateFusionDTO> {
  protected get _route(): string {
    return 'fusions';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateFusionDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Fusion> {
    const parsedData = CreateFusionDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Fusion['id'];
    data: UpdateFusionDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateFusionDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default FusionProxy;
