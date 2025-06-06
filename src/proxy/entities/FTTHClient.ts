import { FTTHClient, UpdateFTTHClientDTO, UpdateFTTHClientDTOSchema } from '../../interface';
import UpdatableProxy from '../UpdatableProxy';
import Api from '../../util/Api';

class FTTHClientProxy extends UpdatableProxy<FTTHClient, UpdateFTTHClientDTO> {
  protected get _route(): string {
    return 'ftth-clients';
  }

  public async updateById(
    id: FTTHClient['id'],
    data: UpdateFTTHClientDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateFTTHClientDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }

  public async deleteById(id: FTTHClient['id'], options?: Parameters<Api['delete']>[0]['options']): Promise<void> {
    return this.apiInstance.delete({
      route: `${this._route}/${id}`,
      options,
    });
  }
}

export default FTTHClientProxy;
