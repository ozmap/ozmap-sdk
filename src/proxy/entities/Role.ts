import { CreateRoleDTO, CreateRoleDTOSchema, Role, UpdateRoleDTO } from '../../interface';
import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class RoleProxy extends WritableProxy<Role, CreateRoleDTO, UpdateRoleDTO> {
  protected get _route(): string {
    return 'roles';
  }

  public async create(data: CreateRoleDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Role> {
    const parsedData = CreateRoleDTOSchema.parse(data);

    return super.create(parsedData, options);
  }
}

export default RoleProxy;
