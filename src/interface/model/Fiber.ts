import { z } from 'zod';

import { NetworkConnectableDataSchema, NetworkConnectableKind, NetworkConnectableSchema } from './NetworkConnectable';
import { stringOrObjectId } from './BaseModel';
import { CableSchema } from './Cable';

const FiberDataSchema = NetworkConnectableDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectableKind.FIBER),
    isDrop: z.boolean(),
    fiberNumber: z.number(),
  }),
);

const FiberSchema = NetworkConnectableSchema.merge(FiberDataSchema).merge(
  z.object({
    parent: z.union([stringOrObjectId, CableSchema]),
  }),
);

const UpdateFiberDTOSchema = FiberDataSchema.omit({
  kind: true,
  project: true,
  connectors: true,
  fiberNumber: true,
  isDrop: true,
  parent: true,
}).partial();

type Fiber = z.infer<typeof FiberSchema>;
type UpdateFiberDTO = z.infer<typeof UpdateFiberDTOSchema>;

export { FiberSchema, Fiber, UpdateFiberDTOSchema, UpdateFiberDTO };
