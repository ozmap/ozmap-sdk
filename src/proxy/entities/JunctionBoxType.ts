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

  public async create({
    data,
    options,
  }: {
    data: CreateJunctionBoxTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<JunctionBoxType> {
    const parsedData = CreateJunctionBoxTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: JunctionBoxType['id'];
    data: UpdateJunctionBoxTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateJunctionBoxTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default JunctionBoxTypeProxy;
