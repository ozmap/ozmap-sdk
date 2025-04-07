import ReadableProxy from '../ReadableProxy';
import { CableStub } from '../../interface';

class CableStubProxy extends ReadableProxy<CableStub> {
  protected get _route(): string {
    return 'cable-stubs';
  }
}

export default CableStubProxy;
