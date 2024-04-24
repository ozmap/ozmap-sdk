import Api from '../util/Api';

abstract class Proxy {
  protected apiInstance: Api;

  protected constructor(api: Api) {
    this.apiInstance = api;
  }
}

export default Proxy;
