import {
  BoxType,
  CreateBoxTypeDTO,
  CreateBoxTypeDTOSchema,
  UpdateBoxTypeDTO,
  UpdateBoxTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BoxTypeProxy extends WritableProxy<BoxType, CreateBoxTypeDTO, UpdateBoxTypeDTO> {
  protected get _route(): string {
    return 'box-types';
  }

  public async create(data: CreateBoxTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<BoxType> {
    const parsedData = CreateBoxTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  updateById(
    id: BoxType['id'],
    data: UpdateBoxTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateBoxTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default BoxTypeProxy;
