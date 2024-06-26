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

  public async create(
    data: CreateSplitterTypeDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<SplitterType> {
    const parsedData = CreateSplitterTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: SplitterType['id'],
    data: UpdateSplitterTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateSplitterTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default SplitterTypeProxy;
