import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

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

const NetworkConnectableSchema = BaseModelSchema.merge(NetworkConnectableDataSchema);

type NetworkConnectable = z.infer<typeof NetworkConnectableSchema>;

export { NetworkConnectableDataSchema, NetworkConnectableSchema, NetworkConnectable, NetworkConnectableKind };
