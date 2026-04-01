import {
  BoxCreateRequest,
  CreateBoxCreateRequestDTO,
  CreateBoxCreateRequestDTOSchema,
  BoxCreateRequestApprove,
  BoxCreateRequestApproveSchema,
  BoxCreateRequestReject,
  BoxCreateRequestRejectSchema,
} from '../../../interface';
import WritableProxy from '../../WritableProxy';
import Api from '../../../util/Api';
import { BaseModel } from '../../../interface';

class BoxCreateRequestProxy extends WritableProxy<BoxCreateRequest, CreateBoxCreateRequestDTO, never> {
  protected get _route(): string {
    return 'box-create-requests';
  }

  public async create(
    data: CreateBoxCreateRequestDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<BoxCreateRequest> {
    const parsedData = CreateBoxCreateRequestDTOSchema.parse(data);
    return super.create(parsedData, options);
  }

  public async approveById(
    requestId: BaseModel['id'],
    data?: BoxCreateRequestApprove,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<BoxCreateRequest> {
    const parsedData = data ? BoxCreateRequestApproveSchema.parse(data) : {};
    return this.apiInstance.post({
      route: `${this._route}/${requestId}/approve`,
      inputData: parsedData,
      options,
    });
  }

  public async rejectById(
    requestId: BaseModel['id'],
    data: BoxCreateRequestReject,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<BoxCreateRequest> {
    const parsedData = BoxCreateRequestRejectSchema.parse(data);
    return this.apiInstance.post({
      route: `${this._route}/${requestId}/reject`,
      inputData: parsedData,
      options,
    });
  }
}

export default BoxCreateRequestProxy;
