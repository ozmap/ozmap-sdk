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

  public async create({
    data,
    options,
  }: {
    data: CreateSwitchDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Switch> {
    const parsedData = CreateSwitchDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Switch['id'];
    data: UpdateSwitchDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateSwitchDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default SwitchProxy;
