import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const DEFAULT_BOX_TEMPLATE_ID = '589de1d126324a2564a6c4d0';

const BoxTemplateDataSchema = z.object({
  name: z.string().trim(),
  structure: z.object({}),
  positions: z.object({}),
  topology: z.object({}),
  description: z.string().optional(),
});

const BoxTemplateSchema = BaseModelSchema.merge(BoxTemplateDataSchema);
const CreateBoxTemplateDTOSchema = BoxTemplateDataSchema.merge(z.object({ external_id: z.any().optional() }));
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
  DEFAULT_BOX_TEMPLATE_ID,
};
