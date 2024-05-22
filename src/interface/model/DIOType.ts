import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const DIOTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().nullish(),
  mold: z.string().trim().nullish(),
  description: z.string().trim().nullish(),
  ratio: z.number().min(1),
  prefix: z.string().default('DIO '),
  size: z.number().min(0).default(0),
  loss: z.number().nullish(),
  tray_number: z.number().min(0),
  input_label: z.string(),
  output_label: z.string(),
});

const DIOTypeSchema = BaseModelSchema.merge(DIOTypeDataSchema);
const CreateDIOTypeDTOSchema = DIOTypeDataSchema.partial({
  isBalanced: true,
  prefix: true,
  input_label: true,
  output_label: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateDIOTypeDTOSchema = DIOTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type DIOType = z.infer<typeof DIOTypeSchema>;
type CreateDIOTypeDTO = z.infer<typeof CreateDIOTypeDTOSchema>;
type UpdateDIOTypeDTO = z.infer<typeof UpdateDIOTypeDTOSchema>;

export { DIOTypeSchema, DIOType, CreateDIOTypeDTOSchema, CreateDIOTypeDTO, UpdateDIOTypeDTOSchema, UpdateDIOTypeDTO };
