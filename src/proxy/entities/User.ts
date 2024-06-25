import { User, CreateUserDTO, CreateUserDTOSchema, UpdateUserDTO, UpdateUserDTOSchema } from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class UserProxy extends WritableProxy<User, CreateUserDTO, UpdateUserDTO> {
  protected get _route(): string {
    return 'users';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateUserDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<User> {
    const parsedData = CreateUserDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: User['id'];
    data: UpdateUserDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateUserDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default UserProxy;
