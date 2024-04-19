import {
  BoxTemplate,
  CreateBoxTemplateDTO,
  UpdateBoxTemplateDTO,
  CreateBoxTemplateDTOSchema,
} from '../interface/model';

import Base from './Base';

class BoxTemplateProxy extends Base<BoxTemplate, CreateBoxTemplateDTO, UpdateBoxTemplateDTO> {
  protected get _route(): string {
    return 'box-templates';
  }

  public async create(data: CreateBoxTemplateDTO): Promise<BoxTemplate> {
    const parsedData = CreateBoxTemplateDTOSchema.parse(data);

    return this._restAPI.create<BoxTemplate, CreateBoxTemplateDTO>(this._route, parsedData);
  }

  delete(_id: string, options: { cascade?: boolean }): Promise<void> {
    return Promise.resolve(undefined);
  }

  find(_ids: Array<string>): Promise<Array<BoxTemplate>> {
    return Promise.resolve(undefined);
  }

  update(_model: UpdateBoxTemplateDTO): Promise<void> {
    return Promise.resolve(undefined);
  }
}

export default BoxTemplateProxy;
