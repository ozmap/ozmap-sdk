import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const RegionTypeDataSchema = z.object({
  name: z.string().trim(),
  color: z.string().default('3388FF'),
  description: z.string().trim().nullish(),
  lineWidth: z.number().positive().default(3.5),
  borderColor: z.string(),
});

const RegionTypeSchema = BaseModelSchema.merge(RegionTypeDataSchema);
const CreateRegionTypeDTOSchema = RegionTypeDataSchema.partial({
  lineWidth: true,
  color: true,
  borderColor: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateRegionTypeDTOSchema = RegionTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type RegionType = z.infer<typeof RegionTypeSchema>;
type CreateRegionTypeDTO = z.infer<typeof CreateRegionTypeDTOSchema>;
type UpdateRegionTypeDTO = z.infer<typeof UpdateRegionTypeDTOSchema>;

export {
  RegionTypeSchema,
  RegionType,
  CreateRegionTypeDTOSchema,
  CreateRegionTypeDTO,
  UpdateRegionTypeDTOSchema,
  UpdateRegionTypeDTO,
};
