import Api from '../util/Api';

class Proxy {
  protected apiInstance: Api;

  public constructor(api: Api) {
    this.apiInstance = api;
  }
}

export default Proxy;
