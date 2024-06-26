import { Fiber, UpdateFiberDTO, UpdateFiberDTOSchema } from '../../interface';

import UpdatableProxy from '../UpdatableProxy';
import Api from '../../util/Api';

class FiberProxy extends UpdatableProxy<Fiber, UpdateFiberDTO> {
  protected get _route(): string {
    return 'fibers';
  }

  public async updateById(
    id: Fiber['id'],
    data: UpdateFiberDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateFiberDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default FiberProxy;
