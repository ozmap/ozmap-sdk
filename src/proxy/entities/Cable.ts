import { Cable, CreateCableDTO, CreateCableDTOSchema, UpdateCableDTO, UpdateCableDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class CableProxy extends WritableProxy<Cable, CreateCableDTO, UpdateCableDTO> {
  protected get _route(): string {
    return 'cables';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateCableDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Cable> {
    const parsedData = CreateCableDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Cable['id'];
    data: UpdateCableDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateCableDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default CableProxy;
