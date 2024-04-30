import {
  PoleType,
  CreatePoleTypeDTO,
  CreatePoleTypeDTOSchema,
  UpdatePoleTypeDTO,
  UpdatePoleTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PoleTypeProxy extends WritableProxy<PoleType, CreatePoleTypeDTO, UpdatePoleTypeDTO> {
  protected get _route(): string {
    return 'box-templates';
  }

  public async create({
    data,
    options,
  }: {
    data: CreatePoleTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<PoleType> {
    const parsedData = CreatePoleTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdatePoleTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePoleTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PoleTypeProxy;
