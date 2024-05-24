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

  public async create({
    data,
    options,
  }: {
    data: CreateProspectDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Prospect> {
    const parsedData = CreateProspectDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Prospect['id'];
    data: UpdateProspectDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateProspectDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ProspectProxy;
