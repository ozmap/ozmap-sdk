import {
  BoxStructureChangeRequest,
  CreateBoxStructureChangeRequestDTO,
  CreateBoxStructureChangeRequestDTOSchema,
} from '../../../interface';
import WritableProxy from '../../WritableProxy';
import Api from '../../../util/Api';
import { BaseModel } from '../../../interface';

class BoxStructureChangeRequestProxy extends WritableProxy<
  BoxStructureChangeRequest,
  CreateBoxStructureChangeRequestDTO,
  never
> {
  protected get _route(): string {
    return 'change-requests/box-structures';
  }

  public async create(
    data: CreateBoxStructureChangeRequestDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<BoxStructureChangeRequest> {
    const parsedData = CreateBoxStructureChangeRequestDTOSchema.parse(data);
    return super.create(parsedData, options);
  }

  public async reviewById(
    id: BaseModel['id'],
    data: { status: 'approved' | 'rejected'; observation?: string },
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    return this.apiInstance.patch({
      route: `${this._route}/${id}/review`,
      inputData: data,
      options,
    });
  }
}

export default BoxStructureChangeRequestProxy;
