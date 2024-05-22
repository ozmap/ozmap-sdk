import { z } from 'zod';
import { stringOrObjectId, BaseModelSchema } from './BaseModel';
import { BoxTemplateSchema, DEFAULT_BOX_TEMPLATE_ID } from './BoxTemplate';

const BoxTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().optional(),
  prefix: z.string(),
  default_template: stringOrObjectId.default(DEFAULT_BOX_TEMPLATE_ID).optional(),
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

const BoxTypeSchema = BaseModelSchema.merge(BoxTypeDataSchema)
  .omit({ default_template: true })
  .merge(
    z.object({
      default_template: stringOrObjectId.or(BoxTemplateSchema).optional(),
    }),
  );
const CreateBoxTypeDTOSchema = BoxTypeDataSchema.merge(
  z.object({ external_id: z.any().optional(), prefix: z.string().default('').optional() }),
);
const UpdateBoxTypeDTOSchema = BoxTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type BoxType = z.infer<typeof BoxTypeSchema>;
type CreateBoxTypeDTO = z.infer<typeof CreateBoxTypeDTOSchema>;
type UpdateBoxTypeDTO = z.infer<typeof UpdateBoxTypeDTOSchema>;

export { BoxTypeSchema, BoxType, CreateBoxTypeDTOSchema, CreateBoxTypeDTO, UpdateBoxTypeDTOSchema, UpdateBoxTypeDTO };
