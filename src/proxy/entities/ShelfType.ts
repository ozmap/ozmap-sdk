import {
  ShelfType,
  CreateShelfTypeDTO,
  CreateShelfTypeDTOSchema,
  UpdateShelfTypeDTO,
  UpdateShelfTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ShelfTypeProxy extends WritableProxy<ShelfType, CreateShelfTypeDTO, UpdateShelfTypeDTO> {
  protected get _route(): string {
    return 'shelf-types';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateShelfTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<ShelfType> {
    const parsedData = CreateShelfTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: ShelfType['id'];
    data: UpdateShelfTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateShelfTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ShelfTypeProxy;
