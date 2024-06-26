import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

const CableTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().optional(),
  mold: z.string().trim().optional(),
  default_level: z.number(),
  description: z.string().trim().optional(),
  config: z.object({
    regular: z.object({
      color: z.string().default('#3388FFFF'),
      weight: z.number().default(6),
    }),
    not_implanted: z.object({
      color: z.string().default('#FFA500A6'),
      weight: z.number().default(6),
    }),
  }),
  fiberProfile: stringOrObjectId,
  fiberNumber: z.number().min(1),
  looseNumber: z.number().min(1),
  base_loss: z.number(),
});

const CableTypeSchema = BaseModelSchema.merge(CableTypeDataSchema);
const CreateCableTypeDTOSchema = CableTypeDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateCableTypeDTOSchema = CableTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type CableType = z.infer<typeof CableTypeSchema>;
type CreateCableTypeDTO = z.infer<typeof CreateCableTypeDTOSchema>;
type UpdateCableTypeDTO = z.infer<typeof UpdateCableTypeDTOSchema>;

export {
  CableTypeSchema,
  CableType,
  CreateCableTypeDTOSchema,
  CreateCableTypeDTO,
  UpdateCableTypeDTOSchema,
  UpdateCableTypeDTO,
};
