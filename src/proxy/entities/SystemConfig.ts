import { SystemConfig, UpdateSystemConfigDTO, UpdateSystemConfigDTOSchema } from '../../interface';

import Api from '../../util/Api';
import Proxy from '../Proxy';

class SystemConfigProxy extends Proxy {
  public constructor(api: Api) {
    super(api);
  }

  protected get _route(): string {
    return 'system-configs';
  }

  public async find(): Promise<SystemConfig> {
    return this.apiInstance.get<SystemConfig>({ route: this._route });
  }

  public async update({
    id,
    data,
    options,
  }: {
    id: SystemConfig['id'];
    data: UpdateSystemConfigDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateSystemConfigDTOSchema.parse(data);

    return this.apiInstance.patch({
      route: `${this._route}/${id}`,
      inputData: parsedData,
      options: {
        ...options,
        headers: {
          ...options?.headers,
          integration: undefined,
        },
      },
    });
  }
}

export default SystemConfigProxy;
