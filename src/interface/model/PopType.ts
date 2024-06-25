import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const PopTypeDataSchema = z.object({
  code: z.string().trim(),
  prefix: z.string(),
  hierarchyLevel: z.number().default(1),
  description: z.string().trim().optional(),
  color: z.object({
    implanted: z.string().default('#006400ff'),
    notImplanted: z.string().default('#00640080'),
    draft: z.string().default('#eb00beff'),
  }),
});

const PopTypeSchema = BaseModelSchema.merge(PopTypeDataSchema);
const CreatePopTypeDTOSchema = PopTypeDataSchema.merge(
  z.object({
    external_id: z.any().optional(),
  }),
);
const UpdatePopTypeDTOSchema = PopTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type PopType = z.infer<typeof PopTypeSchema>;
type CreatePopTypeDTO = z.infer<typeof CreatePopTypeDTOSchema>;
type UpdatePopTypeDTO = z.infer<typeof UpdatePopTypeDTOSchema>;

export { PopTypeSchema, PopType, CreatePopTypeDTOSchema, CreatePopTypeDTO, UpdatePopTypeDTOSchema, UpdatePopTypeDTO };
