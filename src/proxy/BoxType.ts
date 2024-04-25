import {
  BoxType,
  CreateBoxTypeDTO,
  CreateBoxTypeDTOSchema,
  UpdateBoxTypeDTO,
  UpdateBoxTypeDTOSchema,
} from '../interface';

import Base from './Base';
import Api from '../util/Api';

class BoxTypeProxy extends Base<BoxType, CreateBoxTypeDTO, UpdateBoxTypeDTO> {
  protected get _route(): string {
    return 'box-templates';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateBoxTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<BoxType> {
    const parsedData = CreateBoxTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdateBoxTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateBoxTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default BoxTypeProxy;
