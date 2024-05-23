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
    return 'dio-types';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateConnectorTypeDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<ConnectorType> {
    const parsedData = CreateConnectorTypeDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  update({
    id,
    data,
    options,
  }: {
    id: ConnectorType['id'];
    data: UpdateConnectorTypeDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateConnectorTypeDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ConnectorTypeProxy;
