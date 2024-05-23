import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const FusionTypeDataSchema = z.object({
  code: z.string().trim(),
  loss: z.number(),
  isDrop: z.boolean(),
});

const FusionTypeSchema = BaseModelSchema.merge(FusionTypeDataSchema);
const CreateFusionTypeDTOSchema = FusionTypeDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateFusionTypeDTOSchema = FusionTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type FusionType = z.infer<typeof FusionTypeSchema>;
type CreateFusionTypeDTO = z.infer<typeof CreateFusionTypeDTOSchema>;
type UpdateFusionTypeDTO = z.infer<typeof UpdateFusionTypeDTOSchema>;

export {
  FusionTypeSchema,
  FusionType,
  CreateFusionTypeDTOSchema,
  CreateFusionTypeDTO,
  UpdateFusionTypeDTOSchema,
  UpdateFusionTypeDTO,
};
