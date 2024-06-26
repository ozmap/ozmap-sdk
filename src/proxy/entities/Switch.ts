import {
  Switch,
  CreateSwitchDTO,
  CreateSwitchDTOSchema,
  UpdateSwitchDTO,
  UpdateSwitchDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class SwitchProxy extends WritableProxy<Switch, CreateSwitchDTO, UpdateSwitchDTO> {
  protected get _route(): string {
    return 'switches';
  }

  public async create(data: CreateSwitchDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Switch> {
    const parsedData = CreateSwitchDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Switch['id'],
    data: UpdateSwitchDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateSwitchDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default SwitchProxy;
