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

  public async create({
    data,
    options,
  }: {
    data: CreatePendencyDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Pendency> {
    const parsedData = CreatePendencyDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Pendency['id'];
    data: UpdatePendencyDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdatePendencyDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default PendencyProxy;
