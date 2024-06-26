import { z } from 'zod';
import { BaseModelSchema, externalId } from './BaseModel';

const PendencyTypeDataSchema = z.object({
  name: z.string().trim(),
  color: z.string().default('#ffdd00'),
  description: z.string().trim().nullish(),
});

const PendencyTypeSchema = BaseModelSchema.merge(PendencyTypeDataSchema);
const CreatePendencyTypeDTOSchema = PendencyTypeDataSchema.merge(z.object({ external_id: externalId })).partial({
  color: true,
});
const UpdatePendencyTypeDTOSchema = PendencyTypeDataSchema.merge(z.object({ external_id: externalId })).partial();

type PendencyType = z.infer<typeof PendencyTypeSchema>;
type CreatePendencyTypeDTO = z.infer<typeof CreatePendencyTypeDTOSchema>;
type UpdatePendencyTypeDTO = z.infer<typeof UpdatePendencyTypeDTOSchema>;

export {
  PendencyTypeSchema,
  PendencyType,
  CreatePendencyTypeDTOSchema,
  CreatePendencyTypeDTO,
  UpdatePendencyTypeDTOSchema,
  UpdatePendencyTypeDTO,
};
