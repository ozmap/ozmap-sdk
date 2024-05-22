import ReadableProxy from '../ReadableProxy';
import { NetworkConnector } from '../../interface';

class NetworkConnectorProxy extends ReadableProxy<NetworkConnector> {
  protected get _route(): string {
    return 'network-connectors';
  }
}

export default NetworkConnectorProxy;
