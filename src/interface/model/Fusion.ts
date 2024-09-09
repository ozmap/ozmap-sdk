import { z } from 'zod';
import { stringOrObjectId } from './BaseModel';
import { NetworkConnectorDataSchema, NetworkConnectorKind, NetworkConnectorSchema } from './NetworkConnector';
import { FusionTypeSchema } from './FusionType';
import { NetworkConnectableSchema } from './NetworkConnectable';

const FusionDataSchema = NetworkConnectorDataSchema.merge(
  z.object({
    kind: z.literal(NetworkConnectorKind.FUSION),
    connectables: z.array(stringOrObjectId.nullable()),
    fusionType: stringOrObjectId,
  }),
);

const FusionSchema = NetworkConnectorSchema.merge(FusionDataSchema).merge(
  z.object({
    fusionType: z.union([stringOrObjectId, FusionTypeSchema]),
    connectables: z.union([z.array(stringOrObjectId.nullable()), z.array(NetworkConnectableSchema.nullable())]),
  }),
);

const CreateFusionDTOSchema = FusionDataSchema.partial({ attenuation: true })
  .omit({
    project: true,
    kind: true,
    connectables: true,
    isDrop: true,
  })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdateFusionDTOSchema = FusionDataSchema.omit({ kind: true, project: true, connectables: true })
  .merge(z.object({ external_id: z.any() }))
  .partial({ name: true });

type Fusion = z.infer<typeof FusionSchema>;
type CreateFusionDTO = z.infer<typeof CreateFusionDTOSchema>;
type UpdateFusionDTO = z.infer<typeof UpdateFusionDTOSchema>;

export { FusionSchema, Fusion, CreateFusionDTOSchema, CreateFusionDTO, UpdateFusionDTOSchema, UpdateFusionDTO };
