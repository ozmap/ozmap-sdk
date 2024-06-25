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

  public async create({
    data,
    options,
  }: {
    data: CreateProjectGroupDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<ProjectGroup> {
    const parsedData = CreateProjectGroupDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: ProjectGroup['id'];
    data: UpdateProjectGroupDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateProjectGroupDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ProjectGroupProxy;
