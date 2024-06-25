import {
  Pendency,
  CreatePendencyDTO,
  CreatePendencyDTOSchema,
  UpdatePendencyDTO,
  UpdatePendencyDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class PendencyProxy extends WritableProxy<Pendency, CreatePendencyDTO, UpdatePendencyDTO> {
  protected get _route(): string {
    return 'pendencies';
  }

  public async create(data: CreatePendencyDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Pendency> {
    const parsedData = CreatePendencyDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Pendency['id'],
    data: UpdatePendencyDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdatePendencyDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default PendencyProxy;
