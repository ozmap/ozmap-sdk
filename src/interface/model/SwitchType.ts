import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const SwitchTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().nullish(),
  mold: z.string().trim().nullish(),
  description: z.string().trim().nullish(),
  ratio: z.number().min(1),
  isDrop: z.boolean(),
  manageable: z.boolean().default(false),
  size: z.number().min(0).default(0),
});

const SwitchTypeSchema = BaseModelSchema.merge(SwitchTypeDataSchema);
const CreateSwitchTypeDTOSchema = SwitchTypeDataSchema.partial({
  manageable: true,
  size: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateSwitchTypeDTOSchema = SwitchTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type SwitchType = z.infer<typeof SwitchTypeSchema>;
type CreateSwitchTypeDTO = z.infer<typeof CreateSwitchTypeDTOSchema>;
type UpdateSwitchTypeDTO = z.infer<typeof UpdateSwitchTypeDTOSchema>;

export {
  SwitchTypeSchema,
  SwitchType,
  CreateSwitchTypeDTOSchema,
  CreateSwitchTypeDTO,
  UpdateSwitchTypeDTOSchema,
  UpdateSwitchTypeDTO,
};
