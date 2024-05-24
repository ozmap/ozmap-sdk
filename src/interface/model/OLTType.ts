import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const OLTTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim(),
  mold: z.string().trim(),
  defaultPotency: z.number().default(0),
  defaultClients: z.number().nullish(),
  description: z.string().trim(),
  size: z.number().positive().default(0),
  slots: z.array(
    z.object({
      name: z.number().int().positive(),
      starting_pon_number: z.number().int().default(1),
      pons: z.number().int().positive(),
    }),
  ),
});

const OLTTypeSchema = BaseModelSchema.merge(OLTTypeDataSchema);
const CreateOLTTypeDTOSchema = OLTTypeDataSchema.partial({
  size: true,
  prefix: true,
  brand: true,
  mold: true,
  defaultPotency: true,
  slots: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateOLTTypeDTOSchema = OLTTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type OLTType = z.infer<typeof OLTTypeSchema>;
type CreateOLTTypeDTO = z.infer<typeof CreateOLTTypeDTOSchema>;
type UpdateOLTTypeDTO = z.infer<typeof UpdateOLTTypeDTOSchema>;

export { OLTTypeSchema, OLTType, CreateOLTTypeDTOSchema, CreateOLTTypeDTO, UpdateOLTTypeDTOSchema, UpdateOLTTypeDTO };
