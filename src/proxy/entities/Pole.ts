import { Pole, CreatePoleDTO, CreatePoleDTOSchema, UpdatePoleDTO, UpdatePoleDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PoleProxy extends WritableProxy<Pole, CreatePoleDTO, UpdatePoleDTO> {
  protected get _route(): string {
    return 'poles';
  }

  public async create(data: CreatePoleDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Pole> {
    const parsedData = CreatePoleDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Pole['id'],
    data: UpdatePoleDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePoleDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PoleProxy;
