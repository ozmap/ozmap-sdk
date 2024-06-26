import {
  Prospect,
  CreateProspectDTO,
  CreateProspectDTOSchema,
  UpdateProspectDTO,
  UpdateProspectDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ProspectProxy extends WritableProxy<Prospect, CreateProspectDTO, UpdateProspectDTO> {
  protected get _route(): string {
    return 'prospects';
  }

  public async create(data: CreateProspectDTO, options?: Parameters<Api['post']>[0]['options']): Promise<Prospect> {
    const parsedData = CreateProspectDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: Prospect['id'],
    data: UpdateProspectDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateProspectDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default ProspectProxy;
