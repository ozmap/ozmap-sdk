import { Pole, CreatePoleDTO, CreatePoleDTOSchema, UpdatePoleDTO, UpdatePoleDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PoleProxy extends WritableProxy<Pole, CreatePoleDTO, UpdatePoleDTO> {
  protected get _route(): string {
    return 'box-templates';
  }

  public async create({
    data,
    options,
  }: {
    data: CreatePoleDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Pole> {
    const parsedData = CreatePoleDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdatePoleDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePoleDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PoleProxy;
