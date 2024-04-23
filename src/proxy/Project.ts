import {
  Project,
  CreateProjectDTO,
  CreateProjectDTOSchema,
  UpdateProjectDTO,
  UpdateProjectDTOSchema,
} from '../interface';

import Base from './Base';
import Api from '../util/Api';

class ProjectProxy extends Base<Project, CreateProjectDTO, UpdateProjectDTO> {
  protected get _route(): string {
    return 'box-templates';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateProjectDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Project> {
    const parsedData = CreateProjectDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: string;
    data: UpdateProjectDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateProjectDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ProjectProxy;
