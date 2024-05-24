import { Box, CreateBoxDTO, CreateBoxDTOSchema, UpdateBoxDTO, UpdateBoxDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BoxProxy extends WritableProxy<Box, CreateBoxDTO, UpdateBoxDTO> {
  protected get _route(): string {
    return 'boxes';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateBoxDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Box> {
    const parsedData = CreateBoxDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Box['id'];
    data: UpdateBoxDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateBoxDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default BoxProxy;
