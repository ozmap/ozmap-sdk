import { Tag, CreateTagDTO, UpdateTagDTO, CreateTagDTOSchema, UpdateTagDTOSchema } from '../interface';

import Base from './Base';
import Api from '../util/Api';

class TagProxy extends Base<Tag, CreateTagDTO, UpdateTagDTO> {
  protected get _route(): string {
    return 'tags';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateTagDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Tag> {
    const parsedData = CreateTagDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdateTagDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateTagDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default TagProxy;
