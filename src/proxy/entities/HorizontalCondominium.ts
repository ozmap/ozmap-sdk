import {
  HorizontalCondominium,
  CreateHorizontalCondominiumDTO,
  CreateHorizontalCondominiumDTOSchema,
  UpdateHorizontalCondominiumDTO,
  UpdateHorizontalCondominiumDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class HorizontalCondominiumProxy extends WritableProxy<
  HorizontalCondominium,
  CreateHorizontalCondominiumDTO,
  UpdateHorizontalCondominiumDTO
> {
  protected get _route(): string {
    return 'horizontal-condominiums';
  }

  public async create(
    data: CreateHorizontalCondominiumDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<HorizontalCondominium> {
    const parsedData = CreateHorizontalCondominiumDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: HorizontalCondominium['id'],
    data: UpdateHorizontalCondominiumDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateHorizontalCondominiumDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default HorizontalCondominiumProxy;
