import { Tag, CreateTagDTO, UpdateTagDTO, CreateTagDTOSchema, UpdateTagDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class TagProxy extends WritableProxy<Tag, CreateTagDTO, UpdateTagDTO> {
  protected get _route(): string {
    return 'tags';
  }

  public async create(data: CreateTagDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Tag> {
    const parsedData = CreateTagDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Tag['id'],
    data: UpdateTagDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateTagDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default TagProxy;
