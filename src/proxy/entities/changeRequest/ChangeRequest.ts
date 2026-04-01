import { BaseChangeRequest } from '../../../interface';
import ReadableProxy from '../../ReadableProxy';

class ChangeRequestProxy extends ReadableProxy<BaseChangeRequest> {
  protected get _route(): string {
    return 'change-requests';
  }
}

export default ChangeRequestProxy;
