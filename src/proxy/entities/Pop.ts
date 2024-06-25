import { Pop, CreatePopDTO, CreatePopDTOSchema, UpdatePopDTO, UpdatePopDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PopProxy extends WritableProxy<Pop, CreatePopDTO, UpdatePopDTO> {
  protected get _route(): string {
    return 'pops';
  }

  public async create(data: CreatePopDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Pop> {
    const parsedData = CreatePopDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Pop['id'],
    data: UpdatePopDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePopDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PopProxy;
