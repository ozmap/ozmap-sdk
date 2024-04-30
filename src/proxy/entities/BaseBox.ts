import ReadableProxy from '../ReadableProxy';
import { BaseBox } from '../../interface';

export class BaseBoxProxy extends ReadableProxy<BaseBox> {
  protected get _route(): string {
    return 'base-boxes';
  }
}
