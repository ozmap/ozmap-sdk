import { Cord, CreateCordDTO, CreateCordDTOSchema, UpdateCordDTO, UpdateCordDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class CordProxy extends WritableProxy<Cord, CreateCordDTO, UpdateCordDTO> {
  protected get _route(): string {
    return 'cords';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateCordDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Cord> {
    const parsedData = CreateCordDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Cord['id'];
    data: UpdateCordDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateCordDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default CordProxy;
