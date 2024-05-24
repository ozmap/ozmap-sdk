import {
  OLTType,
  CreateOLTTypeDTO,
  CreateOLTTypeDTOSchema,
  UpdateOLTTypeDTO,
  UpdateOLTTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class OLTTypeProxy extends WritableProxy<OLTType, CreateOLTTypeDTO, UpdateOLTTypeDTO> {
  protected get _route(): string {
    return 'olt-types';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateOLTTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<OLTType> {
    const parsedData = CreateOLTTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: OLTType['id'];
    data: UpdateOLTTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateOLTTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default OLTTypeProxy;
