import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const ColorDataSchema = z.object({
  color: z.string().trim(),
  name: z.string().trim(),
});

const ColorSchema = BaseModelSchema.merge(ColorDataSchema);
const CreateColorDTOSchema = ColorDataSchema.merge(z.object({}));
const UpdateColorDTOSchema = ColorDataSchema.partial();

type Color = z.infer<typeof ColorSchema>;
type CreateColorDTO = z.infer<typeof CreateColorDTOSchema>;
type UpdateColorDTO = z.infer<typeof UpdateColorDTOSchema>;

export { ColorSchema, Color, CreateColorDTOSchema, CreateColorDTO, UpdateColorDTOSchema, UpdateColorDTO };
