import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

enum NetworkConnectorKind {
  SPLITTER = 'Splitter',
  DIO = 'DIO',
}

const NetworkConnectorDataSchema = z.object({
  kind: z.nativeEnum(NetworkConnectorKind),
  connectables: z.union([
    z.array(stringOrObjectId.nullable()),
    z.object({
      input: z.array(z.string().nullable()),
      output: z.array(z.string().nullable()),
    }),
  ]),
  index: z.number().optional(),
  label: z.string().default('').optional(),
  attenuation: z.array(z.number()),
  implanted: z.boolean().default(true),
  isDrop: z.boolean().default(false),
  parent: stringOrObjectId,
  project: stringOrObjectId,
  observation: z.string().optional(),
  name: z.string().optional(),
  size: z.number().optional(),
  shelf: stringOrObjectId.optional(),
});

const NetworkConnectorSchema = BaseModelSchema.merge(NetworkConnectorDataSchema);

type NetworkConnector = z.infer<typeof NetworkConnectorSchema>;

export { NetworkConnectorDataSchema, NetworkConnectorSchema, NetworkConnector, NetworkConnectorKind };
