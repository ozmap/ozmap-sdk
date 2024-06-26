import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const JunctionBoxTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().optional(),
  mold: z.string().trim().optional(),
  description: z.string().trim().optional(),
  prefix: z.string(),
  color: z.string().trim(),
  systemDefault: z.boolean().default(false),
});

const JunctionBoxTypeSchema = BaseModelSchema.merge(JunctionBoxTypeDataSchema);
const CreateJunctionBoxTypeDTOSchema = JunctionBoxTypeDataSchema.omit({ systemDefault: true });
const UpdateJunctionBoxTypeDTOSchema = JunctionBoxTypeDataSchema.omit({ systemDefault: true }).partial();

type JunctionBoxType = z.infer<typeof JunctionBoxTypeSchema>;
type CreateJunctionBoxTypeDTO = z.infer<typeof CreateJunctionBoxTypeDTOSchema>;
type UpdateJunctionBoxTypeDTO = z.infer<typeof UpdateJunctionBoxTypeDTOSchema>;

export {
  JunctionBoxTypeSchema,
  JunctionBoxType,
  CreateJunctionBoxTypeDTOSchema,
  CreateJunctionBoxTypeDTO,
  UpdateJunctionBoxTypeDTOSchema,
  UpdateJunctionBoxTypeDTO,
};
