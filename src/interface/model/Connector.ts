import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { BaseBoxSchema } from './BaseBox';
import { ProjectSchema } from './Project';
import { ConnectorTypeSchema } from './ConnectorType';

const ConnectorDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.CONNECTOR),
    connectables: z.array(stringOrObjectId.nullable()),
    connectorType: stringOrObjectId,
  }),
);

const ConnectorSchema = NetworkConnectorSchema.merge(ConnectorDataSchema).merge(
  z.object({
    parent: z.union([stringOrObjectId, BaseBoxSchema]),
    project: z.union([stringOrObjectId, ProjectSchema]),
    connectorType: z.union([stringOrObjectId, ConnectorTypeSchema]),
    // falta modelagem de connectables
    connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(z.any().nullable())]),
  }),
);

const CreateConnectorDTOSchema = ConnectorDataSchema.partial({ attenuation: true })
  .omit({
    project: true,
    kind: true,
    connectables: true,
    isDrop: true,
  })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateConnectorDTOSchema = ConnectorDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type Connector = z.infer<typeof ConnectorSchema>;
type CreateConnectorDTO = z.infer<typeof CreateConnectorDTOSchema>;
type UpdateConnectorDTO = z.infer<typeof UpdateConnectorDTOSchema>;

export {
  ConnectorSchema,
  Connector,
  CreateConnectorDTOSchema,
  CreateConnectorDTO,
  UpdateConnectorDTOSchema,
  UpdateConnectorDTO,
};
