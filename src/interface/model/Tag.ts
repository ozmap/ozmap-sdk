import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const TagDataSchema = z.object({
  name: z.string().trim(),
  allowedTypes: z.array(
    z.enum([
      'prospect',
      'baseBox',
      'basePoint',
      'baseCable',
      'client',
      'antenna',
      'battery',
      'tower',
      'shelf',
      'junctionBox',
      'duct',
      'splitterPort',
    ]),
  ),
});

const TagSchema = BaseModelSchema.merge(TagDataSchema);
const CreateTagDTOSchema = TagDataSchema.merge(z.object({}));
const UpdateTagDTOSchema = TagDataSchema.partial();

type Tag = z.infer<typeof TagSchema>;
type CreateTagDTO = z.infer<typeof CreateTagDTOSchema>;
type UpdateTagDTO = z.infer<typeof UpdateTagDTOSchema>;

export { TagSchema, Tag, CreateTagDTOSchema, CreateTagDTO, UpdateTagDTOSchema, UpdateTagDTO };
