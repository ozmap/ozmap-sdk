import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const PoleTypeDataSchema = z.object({
  name: z.string().trim(),
  prefix: z.string().default('P_'),
  viabilityAllowed: z.boolean().default(true),
  color: z.string().default('#3388FF'),
  description: z.string().trim(),
});

const PoleTypeSchema = BaseModelSchema.merge(PoleTypeDataSchema);
const CreatePoleTypeDTOSchema = PoleTypeDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdatePoleTypeDTOSchema = PoleTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type PoleType = z.infer<typeof PoleTypeSchema>;
type CreatePoleTypeDTO = z.infer<typeof CreatePoleTypeDTOSchema>;
type UpdatePoleTypeDTO = z.infer<typeof UpdatePoleTypeDTOSchema>;

export {
  PoleTypeSchema,
  PoleType,
  CreatePoleTypeDTOSchema,
  CreatePoleTypeDTO,
  UpdatePoleTypeDTOSchema,
  UpdatePoleTypeDTO,
};
