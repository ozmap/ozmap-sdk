import { DIO, CreateDIODTO, CreateDIODTOSchema, UpdateDIODTO, UpdateDIODTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class DIOProxy extends WritableProxy<DIO, CreateDIODTO, UpdateDIODTO> {
  protected get _route(): string {
    return 'dios';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateDIODTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<DIO> {
    const parsedData = CreateDIODTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: DIO['id'];
    data: UpdateDIODTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateDIODTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default DIOProxy;
