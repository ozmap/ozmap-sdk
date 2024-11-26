import { Radio, CreateRadioDTO, CreateRadioDTOSchema, UpdateRadioDTO, UpdateRadioDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class RadioProxy extends WritableProxy<Radio, CreateRadioDTO, UpdateRadioDTO> {
  protected get _route(): string {
    return 'radios';
  }

  public async create(data: CreateRadioDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Radio> {
    const parsedData = CreateRadioDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Radio['id'],
    data: UpdateRadioDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateRadioDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default RadioProxy;
