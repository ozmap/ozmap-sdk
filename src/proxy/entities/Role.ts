import { CreateRoleDTO, Role, UpdateRoleDTO } from '../../interface';
import WritableProxy from '../WritableProxy';

class RoleProxy extends WritableProxy<Role, CreateRoleDTO, UpdateRoleDTO> {
  protected get _route(): string {
    return 'roles';
  }
}

export default RoleProxy;
