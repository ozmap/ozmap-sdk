import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const FileDataSchema = z.object({
  name: z.string().trim().nullish(),
  contentType: z.string().trim().nullish(),
});

const FileSchema = BaseModelSchema.merge(FileDataSchema);

type File = z.infer<typeof FileSchema>;

export { FileSchema, File };
