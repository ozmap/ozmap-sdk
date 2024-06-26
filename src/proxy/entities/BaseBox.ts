import ReadableProxy from '../ReadableProxy';
import { BaseBox } from '../../interface';

class BaseBoxProxy extends ReadableProxy<BaseBox> {
  protected get _route(): string {
    return 'base-boxes';
  }
}

export default BaseBoxProxy;
