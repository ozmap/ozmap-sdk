import {
  Battery,
  CreateBatteryDTO,
  CreateBatteryDTOSchema,
  UpdateBatteryDTO,
  UpdateBatteryDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BatteryProxy extends WritableProxy<Battery, CreateBatteryDTO, UpdateBatteryDTO> {
  protected get _route(): string {
    return 'batteries';
  }

  public async create(data: CreateBatteryDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Battery> {
    const parsedData = CreateBatteryDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Battery['id'],
    data: UpdateBatteryDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateBatteryDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default BatteryProxy;
