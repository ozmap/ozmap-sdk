import { z } from 'zod';
import { stringOrObjectId, BaseModelSchema } from './BaseModel';
import { BoxTemplateSchema } from './BoxTemplate';

const BoxTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().optional(),
  prefix: z.string(),
  default_template: stringOrObjectId.or(BoxTemplateSchema).optional(),
  mold: z.string().trim().optional(),
  default_level: z.number().optional(),
  default_reserve: z.number().default(0),
  description: z.string().trim().optional(),
  config: z.object({
    base: z.object({
      color: z.string().default('#3388FFFF'),
    }),
    regular: z.object({
      fillColor: z.string().default('#3388FFFF'),
    }),
    not_implanted: z.object({
      fillColor: z.string().default('#FFA500A6'),
    }),
    draft: z.object({
      fillColor: z.string().default('#FFA500A6'),
    }),
  }),
});

const BoxTypeSchema = BaseModelSchema.merge(BoxTypeDataSchema);
const CreateBoxTypeDTOSchema = BoxTypeDataSchema.merge(z.object({}));
const UpdateBoxTypeDTOSchema = BoxTypeDataSchema.partial();

type BoxType = z.infer<typeof BoxTypeSchema>;
type CreateBoxTypeDTO = z.infer<typeof CreateBoxTypeDTOSchema>;
type UpdateBoxTypeDTO = z.infer<typeof UpdateBoxTypeDTOSchema>;

export { BoxTypeSchema, BoxType, CreateBoxTypeDTOSchema, CreateBoxTypeDTO, UpdateBoxTypeDTOSchema, UpdateBoxTypeDTO };