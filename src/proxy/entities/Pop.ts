import { Pop, CreatePopDTO, CreatePopDTOSchema, UpdatePopDTO, UpdatePopDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PopProxy extends WritableProxy<Pop, CreatePopDTO, UpdatePopDTO> {
  protected get _route(): string {
    return 'pops';
  }

  public async create({
    data,
    options,
  }: {
    data: CreatePopDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Pop> {
    const parsedData = CreatePopDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Pop['id'];
    data: UpdatePopDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePopDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PopProxy;
