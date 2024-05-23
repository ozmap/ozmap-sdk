import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { NetworkConnectorSchema } from './NetworkConnector';
import { ProjectSchema } from './Project';

enum NetworkConnectableKind {
  FIBER = 'Fiber',
  CORD = 'Cord',
}

const NetworkConnectableDataSchema = z.object({
  kind: z.nativeEnum(NetworkConnectableKind),
  connectors: z.array(stringOrObjectId).max(2),
  parent: stringOrObjectId,
  project: stringOrObjectId,
  name: z.string().trim(),
});

const NetworkConnectableSchema = BaseModelSchema.merge(NetworkConnectableDataSchema).merge(
  z.object({
    connectors: z.union([z.array(stringOrObjectId).max(2), z.array(NetworkConnectorSchema).max(2)]),
    project: z.union([stringOrObjectId, ProjectSchema]),
  }),
);

type NetworkConnectable = z.infer<typeof NetworkConnectableSchema>;

export { NetworkConnectableDataSchema, NetworkConnectableSchema, NetworkConnectable, NetworkConnectableKind };
