import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { NetworkConnectableSchema } from './NetworkConnectable';

const SlotDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.SLOT),
    connectables: z.array(stringOrObjectId.nullable()),
    label: z.string().default('').nullish(),
    starting_pon_numbere: z.number().min(1),
  }),
);

const SlotSchema = NetworkConnectorSchema.merge(SlotDataSchema).merge(
  z.object({
    connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(NetworkConnectableSchema.nullable())]),
  }),
);

const CreateSlotDTOSchema = SlotDataSchema.partial({ attenuation: true })
  .omit({
    project: true,
    kind: true,
    connectables: true,
  })
  .merge(z.object({ olt: stringOrObjectId, external_id: z.any().optional() }));
const UpdateSlotDTOSchema = SlotDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type Slot = z.infer<typeof SlotSchema>;
type CreateSlotDTO = z.infer<typeof CreateSlotDTOSchema>;
type UpdateSlotDTO = z.infer<typeof UpdateSlotDTOSchema>;

export { SlotSchema, Slot, CreateSlotDTOSchema, CreateSlotDTO, UpdateSlotDTOSchema, UpdateSlotDTO };
