import { Cord, CreateCordDTO, CreateCordDTOSchema, UpdateCordDTO, UpdateCordDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class CordProxy extends WritableProxy<Cord, CreateCordDTO, UpdateCordDTO> {
  protected get _route(): string {
    return 'cords';
  }

  public async create(data: CreateCordDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Cord> {
    const parsedData = CreateCordDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Cord['id'],
    data: UpdateCordDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateCordDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default CordProxy;
