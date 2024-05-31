import {
  BoxTemplate,
  CreateBoxTemplateDTO,
  UpdateBoxTemplateDTO,
  CreateBoxTemplateDTOSchema,
  UpdateBoxTemplateDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class BoxTemplateProxy extends WritableProxy<BoxTemplate, CreateBoxTemplateDTO, UpdateBoxTemplateDTO> {
  protected get _route(): string {
    return 'box-templates';
  }

  public async create(
    data: CreateBoxTemplateDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<BoxTemplate> {
    const parsedData = CreateBoxTemplateDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: BoxTemplate['id'],
    data: UpdateBoxTemplateDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateBoxTemplateDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default BoxTemplateProxy;
