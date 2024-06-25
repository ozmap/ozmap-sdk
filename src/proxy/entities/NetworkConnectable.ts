import ReadableProxy from '../ReadableProxy';
import { NetworkConnectable } from '../../interface/';

class NetworkConnectableProxy extends ReadableProxy<NetworkConnectable> {
  protected get _route(): string {
    return 'network-connectables';
  }
}

export default NetworkConnectableProxy;
