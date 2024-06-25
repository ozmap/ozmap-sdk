import { Color, CreateColorDTO, CreateColorDTOSchema, UpdateColorDTO, UpdateColorDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ColorProxy extends WritableProxy<Color, CreateColorDTO, UpdateColorDTO> {
  protected get _route(): string {
    return 'colors';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateColorDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Color> {
    const parsedData = CreateColorDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Color['id'];
    data: UpdateColorDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateColorDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ColorProxy;
