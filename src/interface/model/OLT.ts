import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { OLTTypeSchema } from './OLTType';
import { NetworkConnectableSchema } from './NetworkConnectable';

const OLTDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.OLT),
    connectables: z.array(stringOrObjectId).min(1),
    oltType: stringOrObjectId,
    label: z.string().trim().nullish().default(''),
    user: z.string().trim().nullish().optional(),
    password: z.string().trim().nullish().optional(),
    ip: z.string().ip().nullish().optional(),
    port: z.number().int().positive().nullish().default(22),
    shelf: stringOrObjectId,
    snmp: z
      .object({
        community: z.string().trim().nullish(),
        version: z.string().trim().nullish(),
        filter: z.string().trim(),
        port: z.number().int().positive(),
        enabled: z.boolean(),
      })
      .nullish(),
    tr069: z
      .object({
        host: z.string().nullish(),
        user: z.string().trim(),
        password: z.string().trim(),
        port: z.number().int().positive(),
        enabled: z.boolean().default(false),
      })
      .nullish(),
  }),
);

const OLTSchema = NetworkConnectorSchema.merge(OLTDataSchema).merge(
  z.object({
    oltType: z.union([stringOrObjectId, OLTTypeSchema]),
    connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(NetworkConnectableSchema.nullable())]),
  }),
);

const CreateOLTDTOSchema = OLTDataSchema.partial({ attenuation: true, name: true })
  .omit({
    project: true,
    kind: true,
    connectables: true,
    isDrop: true,
  })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateOLTDTOSchema = OLTDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type OLT = z.infer<typeof OLTSchema>;
type CreateOLTDTO = z.infer<typeof CreateOLTDTOSchema>;
type UpdateOLTDTO = z.infer<typeof UpdateOLTDTOSchema>;

export { OLTSchema, OLT, CreateOLTDTOSchema, CreateOLTDTO, UpdateOLTDTOSchema, UpdateOLTDTO };
