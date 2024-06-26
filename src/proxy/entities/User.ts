import { User, CreateUserDTO, CreateUserDTOSchema, UpdateUserDTO, UpdateUserDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class UserProxy extends WritableProxy<User, CreateUserDTO, UpdateUserDTO> {
  protected get _route(): string {
    return 'users';
  }

  public async create(data: CreateUserDTO, options?: Parameters<Api['post']>[0]['options']): Promise<User> {
    const parsedData = CreateUserDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: User['id'],
    data: UpdateUserDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateUserDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default UserProxy;
