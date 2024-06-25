import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const ShelfTypeDataSchema = z.object({
  code: z.string().trim(),
  prefix: z.string(),
  brand: z.string().trim().default('-'),
  mold: z.string().trim().default('-'),
  description: z.string().trim().default('-'),
  size: z.number().min(0).default(0),
});

const ShelfTypeSchema = BaseModelSchema.merge(ShelfTypeDataSchema);
const CreateShelfTypeDTOSchema = ShelfTypeDataSchema.partial({
  size: true,
  prefix: true,
  brand: true,
  mold: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateShelfTypeDTOSchema = ShelfTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type ShelfType = z.infer<typeof ShelfTypeSchema>;
type CreateShelfTypeDTO = z.infer<typeof CreateShelfTypeDTOSchema>;
type UpdateShelfTypeDTO = z.infer<typeof UpdateShelfTypeDTOSchema>;

export {
  ShelfTypeSchema,
  ShelfType,
  CreateShelfTypeDTOSchema,
  CreateShelfTypeDTO,
  UpdateShelfTypeDTOSchema,
  UpdateShelfTypeDTO,
};
