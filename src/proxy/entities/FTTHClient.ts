import { FTTHClient } from '../../interface';

import ReadableProxy from '../ReadableProxy';

class FTTHClientProxy extends ReadableProxy<FTTHClient> {
  protected get _route(): string {
    return 'ftth-clients';
  }
}

export default FTTHClientProxy;
