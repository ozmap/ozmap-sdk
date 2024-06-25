import {
  PendencyType,
  CreatePendencyTypeDTO,
  CreatePendencyTypeDTOSchema,
  UpdatePendencyTypeDTO,
  UpdatePendencyTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PendencyTypeProxy extends WritableProxy<PendencyType, CreatePendencyTypeDTO, UpdatePendencyTypeDTO> {
  protected get _route(): string {
    return 'pendency-types';
  }

  public async create(
    data: CreatePendencyTypeDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<PendencyType> {
    const parsedData = CreatePendencyTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: PendencyType['id'],
    data: UpdatePendencyTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePendencyTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PendencyTypeProxy;
