import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BaseBoxSchema } from './BaseBox';
import { ProjectSchema } from './Project';

enum NetworkConnectorKind {
  SPLITTER = 'Splitter',
  DIO = 'DIO',
  FUSION = 'Fusion',
  CONNECTOR = 'Connector',
  PASSING = 'Passing',
  SWITCH = 'Switch',
  SHELF = 'Shelf',
  OLT = 'OLT',
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

const NetworkConnectorSchema = BaseModelSchema.merge(NetworkConnectorDataSchema).merge(
  z.object({
    parent: z.union([stringOrObjectId, BaseBoxSchema]),
    project: z.union([stringOrObjectId, ProjectSchema]),
  }),
);

type NetworkConnector = z.infer<typeof NetworkConnectorSchema>;

export { NetworkConnectorDataSchema, NetworkConnectorSchema, NetworkConnector, NetworkConnectorKind };
