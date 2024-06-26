import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { SplitterTypeSchema } from './SplitterType';

const SplitterDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.SPLITTER),
    connectables: z.object({
      input: z.array(z.string().nullable()),
      output: z.array(z.string().nullable()),
    }),
    splitterType: stringOrObjectId,
    observation: z.string().optional(),
    name: z.string(),
  }),
);

const SplitterSchema = NetworkConnectorSchema.merge(SplitterDataSchema).merge(
  z.object({
    splitterType: z.union([stringOrObjectId, SplitterTypeSchema]),
    // quando modelar shelf ela entra aqui
    shelf: z.union([stringOrObjectId, NetworkConnectorSchema]).optional(),
  }),
);

const CreateSplitterDTOSchema = SplitterDataSchema.partial({ attenuation: true })
  .omit({ project: true, kind: true, connectables: true })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateSplitterDTOSchema = SplitterDataSchema.omit({ kind: true, project: true })
  .merge(z.object({ external_id: z.any() }))
  .partial();

type Splitter = z.infer<typeof SplitterSchema>;
type CreateSplitterDTO = z.infer<typeof CreateSplitterDTOSchema>;
type UpdateSplitterDTO = z.infer<typeof UpdateSplitterDTOSchema>;

export {
  SplitterSchema,
  Splitter,
  CreateSplitterDTOSchema,
  CreateSplitterDTO,
  UpdateSplitterDTOSchema,
  UpdateSplitterDTO,
};
