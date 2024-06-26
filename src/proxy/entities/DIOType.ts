import {
  DIOType,
  CreateDIOTypeDTO,
  CreateDIOTypeDTOSchema,
  UpdateDIOTypeDTO,
  UpdateDIOTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class DIOTypeProxy extends WritableProxy<DIOType, CreateDIOTypeDTO, UpdateDIOTypeDTO> {
  protected get _route(): string {
    return 'dio-types';
  }

  public async create(data: CreateDIOTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<DIOType> {
    const parsedData = CreateDIOTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: DIOType['id'],
    data: UpdateDIOTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateDIOTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default DIOTypeProxy;
