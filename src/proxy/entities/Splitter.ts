import {
  Splitter,
  CreateSplitterDTO,
  CreateSplitterDTOSchema,
  UpdateSplitterDTO,
  UpdateSplitterDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class SplitterProxy extends WritableProxy<Splitter, CreateSplitterDTO, UpdateSplitterDTO> {
  protected get _route(): string {
    return 'splitters';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateSplitterDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Splitter> {
    const parsedData = CreateSplitterDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: Splitter['id'];
    data: UpdateSplitterDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateSplitterDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default SplitterProxy;
