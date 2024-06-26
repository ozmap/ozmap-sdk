import ReadableProxy from '../ReadableProxy';
import { Role } from '../../interface';

class RoleProxy extends ReadableProxy<Role> {
  protected get _route(): string {
    return 'roles';
  }
}

export default RoleProxy;
