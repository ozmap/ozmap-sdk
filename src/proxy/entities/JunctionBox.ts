import {
  JunctionBox,
  CreateJunctionBoxDTO,
  CreateJunctionBoxDTOSchema,
  UpdateJunctionBoxDTO,
  UpdateJunctionBoxDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class JunctionBoxProxy extends WritableProxy<JunctionBox, CreateJunctionBoxDTO, UpdateJunctionBoxDTO> {
  protected get _route(): string {
    return 'junction-boxes';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateJunctionBoxDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<JunctionBox> {
    const parsedData = CreateJunctionBoxDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: JunctionBox['id'];
    data: UpdateJunctionBoxDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateJunctionBoxDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default JunctionBoxProxy;
