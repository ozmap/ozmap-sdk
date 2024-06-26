import { Point, CreatePointDTO, UpdatePointDTO, CreatePointDTOSchema, UpdatePointDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PointProxy extends WritableProxy<Point, CreatePointDTO, UpdatePointDTO> {
  protected get _route(): string {
    return 'points';
  }

  public async create(data: CreatePointDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Point> {
    const parsedData = CreatePointDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Point['id'],
    data: UpdatePointDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePointDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PointProxy;
