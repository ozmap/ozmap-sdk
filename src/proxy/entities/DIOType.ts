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

  public async create({
    data,
    options,
  }: {
    data: CreateDIOTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<DIOType> {
    const parsedData = CreateDIOTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: DIOType['id'];
    data: UpdateDIOTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateDIOTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default DIOTypeProxy;
