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

  public async create({
    data,
    options,
  }: {
    data: CreateFiberProfileDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<FiberProfile> {
    const parsedData = CreateFiberProfileDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: FiberProfile['id'];
    data: UpdateFiberProfileDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateFiberProfileDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default FiberProfileProxy;
