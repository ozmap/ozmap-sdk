import {
  Antenna,
  CreateAntennaDTO,
  CreateAntennaDTOSchema,
  UpdateAntennaDTO,
  UpdateAntennaDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class AntennaProxy extends WritableProxy<Antenna, CreateAntennaDTO, UpdateAntennaDTO> {
  protected get _route(): string {
    return 'antennas';
  }

  public async create(data: CreateAntennaDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Antenna> {
    const parsedData = CreateAntennaDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Antenna['id'],
    data: UpdateAntennaDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateAntennaDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default AntennaProxy;
