import ReadableProxy from '../ReadableProxy';
import { BasePoint } from '../../interface/model/BasePoint';

export class BasePointProxy extends ReadableProxy<BasePoint> {
  protected get _route(): string {
    return 'base-points';
  }
}
