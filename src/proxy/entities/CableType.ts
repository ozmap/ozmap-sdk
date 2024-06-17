import {
  CableType,
  CreateCableTypeDTO,
  CreateCableTypeDTOSchema,
  UpdateCableTypeDTO,
  UpdateCableTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class CableTypeProxy extends WritableProxy<CableType, CreateCableTypeDTO, UpdateCableTypeDTO> {
  protected get _route(): string {
    return 'cable-types';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateCableTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<CableType> {
    const parsedData = CreateCableTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: CableType['id'];
    data: UpdateCableTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateCableTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default CableTypeProxy;
