import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectableDataSchema, NetworkConnectableKind, NetworkConnectableSchema } from './NetworkConnectable';
import { BaseBoxSchema } from './BaseBox';

const CordDataSchema = NetworkConnectableDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectableKind.CORD),
  }),
);

const CordSchema = NetworkConnectableSchema.merge(CordDataSchema).merge(
  z.object({
    parent: z.union([stringOrObjectId, BaseBoxSchema]),
  }),
);

const CreateCordDTOSchema = CordDataSchema.omit({ kind: true, connectors: true, project: true }).merge(
  z.object({ external_id: z.any().optional() }),
);
const UpdateCordDTOSchema = CordDataSchema.omit({ parent: true, kind: true, connectors: true, project: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type Cord = z.infer<typeof CordSchema>;
type CreateCordDTO = z.infer<typeof CreateCordDTOSchema>;
type UpdateCordDTO = z.infer<typeof UpdateCordDTOSchema>;

export { CordSchema, Cord, CreateCordDTOSchema, CreateCordDTO, UpdateCordDTOSchema, UpdateCordDTO };
