import {
  SplitterType,
  CreateSplitterTypeDTO,
  CreateSplitterTypeDTOSchema,
  UpdateSplitterTypeDTO,
  UpdateSplitterTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class SplitterTypeProxy extends WritableProxy<SplitterType, CreateSplitterTypeDTO, UpdateSplitterTypeDTO> {
  protected get _route(): string {
    return 'splitter-types';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateSplitterTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<SplitterType> {
    const parsedData = CreateSplitterTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: SplitterType['id'];
    data: UpdateSplitterTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateSplitterTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default SplitterTypeProxy;
