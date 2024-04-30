import { Box, CreateBoxDTO, CreateBoxDTOSchema, UpdateBoxDTO, UpdateBoxDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BoxProxy extends WritableProxy<Box, CreateBoxDTO, UpdateBoxDTO> {
  protected get _route(): string {
    return 'box-templates';
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

  update({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdateBoxDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateBoxDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default BoxProxy;
