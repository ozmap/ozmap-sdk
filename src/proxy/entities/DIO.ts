import { CreateDIODTO, DIO, CreateDIODTOSchema, UpdateDIODTO, UpdateDIODTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class DIOProxy extends WritableProxy<DIO, CreateDIODTO, UpdateDIODTO> {
  protected get _route(): string {
    return 'dios';
  }
  public async create(data: CreateDIODTO, options?: Parameters<Api['post']>[0]['options']): Promise<DIO> {
    const parsedData = CreateDIODTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: DIO['id'],
    data: UpdateDIODTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateDIODTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default DIOProxy;
