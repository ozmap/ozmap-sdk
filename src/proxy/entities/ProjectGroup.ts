import {
  ProjectGroup,
  CreateProjectGroupDTO,
  CreateProjectGroupDTOSchema,
  UpdateProjectGroupDTO,
  UpdateProjectGroupDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ProjectGroupProxy extends WritableProxy<ProjectGroup, CreateProjectGroupDTO, UpdateProjectGroupDTO> {
  protected get _route(): string {
    return 'project-groups';
  }

  public async create(
    data: CreateProjectGroupDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<ProjectGroup> {
    const parsedData = CreateProjectGroupDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: ProjectGroup['id'],
    data: UpdateProjectGroupDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateProjectGroupDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default ProjectGroupProxy;
