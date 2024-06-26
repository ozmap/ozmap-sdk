import { Slot, CreateSlotDTO, CreateSlotDTOSchema, UpdateSlotDTO, UpdateSlotDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class SlotProxy extends WritableProxy<Slot, CreateSlotDTO, UpdateSlotDTO> {
  protected get _route(): string {
    return 'slots';
  }

  public async create(data: CreateSlotDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Slot> {
    const parsedData = CreateSlotDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Slot['id'],
    data: UpdateSlotDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateSlotDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default SlotProxy;
