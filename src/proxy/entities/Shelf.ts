import { Shelf, CreateShelfDTO, CreateShelfDTOSchema, UpdateShelfDTO, UpdateShelfDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ShelfProxy extends WritableProxy<Shelf, CreateShelfDTO, UpdateShelfDTO> {
  protected get _route(): string {
    return 'shelfs';
  }

  public async create(data: CreateShelfDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Shelf> {
    const parsedData = CreateShelfDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Shelf['id'],
    data: UpdateShelfDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateShelfDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default ShelfProxy;
