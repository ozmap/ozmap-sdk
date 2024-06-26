import {
  SwitchType,
  CreateSwitchTypeDTO,
  CreateSwitchTypeDTOSchema,
  UpdateSwitchTypeDTO,
  UpdateSwitchTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class SwitchTypeProxy extends WritableProxy<SwitchType, CreateSwitchTypeDTO, UpdateSwitchTypeDTO> {
  protected get _route(): string {
    return 'switch-types';
  }

  public async create(data: CreateSwitchTypeDTO, options?: Parameters<Api['post']>[0]['options']): Promise<SwitchType> {
    const parsedData = CreateSwitchTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: SwitchType['id'],
    data: UpdateSwitchTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateSwitchTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default SwitchTypeProxy;
