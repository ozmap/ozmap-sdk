import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { DIOTypeSchema } from './DIOType';

const DIODataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.DIO),
    connectables: z.object({
      input: z.array(z.string().nullable()),
      output: z.array(z.string().nullable()),
    }),
    dioType: stringOrObjectId,
    observation: z.string().optional(),
    tray_number: z.number(),
    port_labels: z.array(z.string()),
    tray_labels: z.array(z.string()),
    input_label: z.array(z.string()),
    output_label: z.array(z.string()),
  }),
);

const DIOSchema = NetworkConnectorSchema.merge(DIODataSchema).merge(
  z.object({
    dioType: z.union([stringOrObjectId, DIOTypeSchema]),
    // quando modelar shelf ela entra aqui
    shelf: z.union([stringOrObjectId, NetworkConnectorSchema]).optional(),
  }),
);

const CreateDIODTOSchema = DIODataSchema.partial({ attenuation: true, name: true })
  .omit({
    tray_number: true,
    project: true,
    kind: true,
    connectables: true,
    isDrop: true,
    input_label: true,
    output_label: true,
    port_labels: true,
    tray_labels: true,
  })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateDIODTOSchema = DIODataSchema.omit({ kind: true, project: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type DIO = z.infer<typeof DIOSchema>;
type CreateDIODTO = z.infer<typeof CreateDIODTOSchema>;
type UpdateDIODTO = z.infer<typeof UpdateDIODTOSchema>;

export { DIOSchema, DIO, CreateDIODTOSchema, CreateDIODTO, UpdateDIODTOSchema, UpdateDIODTO };
