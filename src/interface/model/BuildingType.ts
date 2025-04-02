import { z } from 'zod';
import { stringOrObjectId, BaseModelSchema } from './BaseModel';
import { BoxTemplateSchema, DEFAULT_BOX_TEMPLATE_ID } from './BoxTemplate';

const BuildingTypeDataSchema = z.object({
  code: z.string().trim(),
  prefix: z.string(),
  default_template: stringOrObjectId.default(DEFAULT_BOX_TEMPLATE_ID).optional(),
  description: z.string().trim().optional(),
  config: z.object({
    implanted: z.object({
      color: z.string().default('#08641CFF'),
    }),
    not_implanted: z.object({
      color: z.string().default('#08641C73'),
    }),
  }),
});

const BuildingTypeSchema = BaseModelSchema.merge(BuildingTypeDataSchema)
  .omit({ default_template: true })
  .merge(
    z.object({
      default_template: stringOrObjectId.or(BoxTemplateSchema).optional(),
    }),
  );
const CreateBuildingTypeDTOSchema = BuildingTypeDataSchema.merge(
  z.object({ external_id: z.any().optional(), prefix: z.string().default('').optional() }),
);
const UpdateBuildingTypeDTOSchema = BuildingTypeDataSchema.merge(
  z.object({ external_id: z.any().optional() }),
).partial();

type BuildingType = z.infer<typeof BuildingTypeSchema>;
type CreateBuildingTypeDTO = z.infer<typeof CreateBuildingTypeDTOSchema>;
type UpdateBuildingTypeDTO = z.infer<typeof UpdateBuildingTypeDTOSchema>;

export {
  BuildingTypeSchema,
  BuildingType,
  CreateBuildingTypeDTOSchema,
  CreateBuildingTypeDTO,
  UpdateBuildingTypeDTOSchema,
  UpdateBuildingTypeDTO,
};
