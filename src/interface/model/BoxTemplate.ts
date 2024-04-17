import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const BoxTemplateDataSchema = z.object({
  name: z.string().trim(),
  structure: z.object({}),
  positions: z.object({}),
  topology: z.object({}),
  description: z.string().optional(),
});

const BoxTemplateSchema = BaseModelSchema.merge(BoxTemplateDataSchema);
const CreateBoxTemplateDTOSchema = BoxTemplateDataSchema.merge(z.object({}));
const UpdateBoxTemplateDTOSchema = BoxTemplateDataSchema.partial();

type BoxTemplate = z.infer<typeof BoxTemplateSchema>;
type CreateBoxTemplateDTO = z.infer<typeof CreateBoxTemplateDTOSchema>;
type UpdateBoxTemplateDTO = z.infer<typeof UpdateBoxTemplateDTOSchema>;

export {
  BoxTemplateSchema,
  BoxTemplate,
  CreateBoxTemplateDTOSchema,
  CreateBoxTemplateDTO,
  UpdateBoxTemplateDTOSchema,
  UpdateBoxTemplateDTO,
};
