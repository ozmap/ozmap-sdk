import { Point, CreatePointDTO, UpdatePointDTO, CreatePointDTOSchema, UpdatePointDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PointProxy extends WritableProxy<Point, CreatePointDTO, UpdatePointDTO> {
  protected get _route(): string {
    return 'points';
  }

  public async create({
    data,
    options,
  }: {
    data: CreatePointDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Point> {
    const parsedData = CreatePointDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Point['id'];
    data: UpdatePointDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePointDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PointProxy;
