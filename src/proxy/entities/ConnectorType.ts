import {
  ConnectorType,
  CreateConnectorTypeDTO,
  CreateConnectorTypeDTOSchema,
  UpdateConnectorTypeDTO,
  UpdateConnectorTypeDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ConnectorTypeProxy extends WritableProxy<ConnectorType, CreateConnectorTypeDTO, UpdateConnectorTypeDTO> {
  protected get _route(): string {
    return 'connector-types';
  }

  public async create(
    data: CreateConnectorTypeDTO,
    options?: Parameters<Api['post']>[0]['options'],
  ): Promise<ConnectorType> {
    const parsedData = CreateConnectorTypeDTOSchema.parse(data);

    return super.create(parsedData, options);
  }

  public async updateById(
    id: ConnectorType['id'],
    data: UpdateConnectorTypeDTO,
    options?: Parameters<Api['patch']>[0]['options'],
  ): Promise<void> {
    const parsedData = UpdateConnectorTypeDTOSchema.parse(data);

    return super.updateById(id, parsedData, options);
  }
}

export default ConnectorTypeProxy;
