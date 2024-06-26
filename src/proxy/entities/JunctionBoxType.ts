import {
  JunctionBoxType,
  CreateJunctionBoxTypeDTO,
  CreateJunctionBoxTypeDTOSchema,
  UpdateJunctionBoxTypeDTO,
  UpdateJunctionBoxTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class JunctionBoxTypeProxy extends WritableProxy<JunctionBoxType, CreateJunctionBoxTypeDTO, UpdateJunctionBoxTypeDTO> {
  protected get _route(): string {
    return 'junction-box-types';
  }

  public async create(
    data: CreateJunctionBoxTypeDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<JunctionBoxType> {
    const parsedData = CreateJunctionBoxTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: JunctionBoxType['id'],
    data: UpdateJunctionBoxTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateJunctionBoxTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default JunctionBoxTypeProxy;
