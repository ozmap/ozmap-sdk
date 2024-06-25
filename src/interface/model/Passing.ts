import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { NetworkConnectableSchema } from './NetworkConnectable';

const PassingDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.PASSING),
    connectables: z.array(stringOrObjectId.nullable()),
  }),
);

const PassingSchema = NetworkConnectorSchema.merge(PassingDataSchema).merge(
  z.object({
    connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(NetworkConnectableSchema.nullable())]),
  }),
);

type Passing = z.infer<typeof PassingSchema>;

export { PassingSchema, Passing };
