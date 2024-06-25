import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { SwitchTypeSchema } from './SwitchType';

const SwitchDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.SWITCH),
    connectables: z.array(stringOrObjectId.nullable()),
    switchType: stringOrObjectId,
    port_labels: z.array(z.string().nullable()),
    shelf: stringOrObjectId.nullish(),
    manageable: z.boolean().default(false),
  }),
);

const SwitchSchema = NetworkConnectorSchema.merge(SwitchDataSchema)
  .merge(
    z.object({
      // todo quando modelar shelf ela entra aqui
      shelf: z.union([stringOrObjectId, NetworkConnectorSchema]).optional(),
      switchType: z.union([stringOrObjectId, SwitchTypeSchema]),
      // todo falta modelagem de connectables
      connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(z.any().nullable())]),
    }),
  )
  .partial({ manageable: true });

const CreateSwitchDTOSchema = SwitchDataSchema.partial({ attenuation: true })
  .omit({
    project: true,
    kind: true,
    connectables: true,
    isDrop: true,
  })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateSwitchDTOSchema = SwitchDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type Switch = z.infer<typeof SwitchSchema>;
type CreateSwitchDTO = z.infer<typeof CreateSwitchDTOSchema>;
type UpdateSwitchDTO = z.infer<typeof UpdateSwitchDTOSchema>;

export { SwitchSchema, Switch, CreateSwitchDTOSchema, CreateSwitchDTO, UpdateSwitchDTOSchema, UpdateSwitchDTO };
