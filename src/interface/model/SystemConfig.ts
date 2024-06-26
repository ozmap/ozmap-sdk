import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const SystemConfigDataSchema = z.object({
  hierarchyLevels: z.object({
    cables: z
      .array(
        z.object({
          id: z.number(),
          name: z.string().trim(),
          translated_name: z.string().trim().optional(),
        }),
      )
      .optional(),
    boxes: z
      .array(
        z.object({
          id: z.number(),
          name: z.string().trim(),
          translated_name: z.string().trim().optional(),
        }),
      )
      .optional(),
    pops: z
      .array(
        z.object({
          id: z.number(),
          name: z.string().trim(),
          translated_name: z.string().trim().optional(),
        }),
      )
      .optional(),
    towers: z
      .array(
        z.object({
          id: z.number(),
          name: z.string().trim(),
          translated_name: z.string().trim().optional(),
        }),
      )
      .optional(),
  }),
});

const SystemConfigSchema = BaseModelSchema.merge(SystemConfigDataSchema);
const CreateSystemConfigDTOSchema = SystemConfigSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateSystemConfigDTOSchema = SystemConfigSchema.partial();

type SystemConfig = z.infer<typeof SystemConfigSchema>;
type CreateSystemConfigDTO = z.infer<typeof CreateSystemConfigDTOSchema>;
type UpdateSystemConfigDTO = z.infer<typeof UpdateSystemConfigDTOSchema>;

export {
  SystemConfigSchema,
  SystemConfig,
  CreateSystemConfigDTOSchema,
  CreateSystemConfigDTO,
  UpdateSystemConfigDTOSchema,
  UpdateSystemConfigDTO,
};
