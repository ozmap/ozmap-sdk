import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { NetworkConnectableSchema } from './NetworkConnectable';

const PONDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.PON),
    connectables: z.array(stringOrObjectId.nullable()),
    potency: z.number().default(0),
    maximumClients: z.number().min(0).default(Infinity),
  }),
);

const PONSchema = NetworkConnectorSchema.merge(PONDataSchema).merge(
  z.object({
    connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(NetworkConnectableSchema.nullable())]),
  }),
);

const CreatePONDTOSchema = PONDataSchema.partial({ attenuation: true })
  .omit({
    implanted: true,
    isDrop: true,
    kind: true,
    connectables: true,
    maximumClients: true,
  })
  .merge(z.object({ slot: stringOrObjectId, external_id: z.any().optional() }));
const UpdatePONDTOSchema = PONDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type PON = z.infer<typeof PONSchema>;
type CreatePONDTO = z.infer<typeof CreatePONDTOSchema>;
type UpdatePONDTO = z.infer<typeof UpdatePONDTOSchema>;

export { PONSchema, PON, CreatePONDTOSchema, CreatePONDTO, UpdatePONDTOSchema, UpdatePONDTO };
