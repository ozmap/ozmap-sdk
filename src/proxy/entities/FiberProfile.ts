import {
  FiberProfile,
  CreateFiberProfileDTO,
  CreateFiberProfileDTOSchema,
  UpdateFiberProfileDTO,
  UpdateFiberProfileDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class FiberProfileProxy extends WritableProxy<FiberProfile, CreateFiberProfileDTO, UpdateFiberProfileDTO> {
  protected get _route(): string {
    return 'fiber-profiles';
  }

  public async create(
    data: CreateFiberProfileDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<FiberProfile> {
    const parsedData = CreateFiberProfileDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: FiberProfile['id'],
    data: UpdateFiberProfileDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateFiberProfileDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default FiberProfileProxy;
