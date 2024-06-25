import {
  Connector,
  CreateConnectorDTO,
  CreateConnectorDTOSchema,
  UpdateConnectorDTO,
  UpdateConnectorDTOSchema,
} from '../../interface';

import WritableProxy from '../WritableProxy';
import Api from '../../util/Api';

class ConnectorProxy extends WritableProxy<Connector, CreateConnectorDTO, UpdateConnectorDTO> {
  protected get _route(): string {
    return 'connectors';
  }

  public async create({
    data,
    options,
  }: {
    data: CreateConnectorDTO;
    options?: Parameters<Api['post']>[0]['options'];
  }): Promise<Connector> {
    const parsedData = CreateConnectorDTOSchema.parse(data);

    return super.create({ data: parsedData, options });
  }

  updateById({
    id,
    data,
    options,
  }: {
    id: Connector['id'];
    data: UpdateConnectorDTO;
    options?: Parameters<Api['patch']>[0]['options'];
  }): Promise<void> {
    const parsedData = UpdateConnectorDTOSchema.parse(data);

    return super.updateById({ id, data: parsedData, options });
  }
}

export default ConnectorProxy;
