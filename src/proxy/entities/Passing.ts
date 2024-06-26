import { Passing } from '../../interface';

import ReadableProxy from '../ReadableProxy';

class PassingProxy extends ReadableProxy<Passing> {
  protected get _route(): string {
    return 'passings';
  }
}

export default PassingProxy;
