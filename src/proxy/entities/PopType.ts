import {
  PopType,
  CreatePopTypeDTO,
  CreatePopTypeDTOSchema,
  UpdatePopTypeDTO,
  UpdatePopTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PopTypeProxy extends WritableProxy<PopType, CreatePopTypeDTO, UpdatePopTypeDTO> {
  protected get _route(): string {
    return 'pop-types';
  }

  public async create(data: CreatePopTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<PopType> {
    const parsedData = CreatePopTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: PopType['id'],
    data: UpdatePopTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePopTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PopTypeProxy;
