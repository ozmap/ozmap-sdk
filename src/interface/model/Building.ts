import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BaseBoxDataSchema, BaseBoxKind } from './BaseBox';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';
import { BuildingTypeSchema } from './BuildingType';
import { ColorSchema } from './Color';

const BuildingDataSchema = BaseBoxDataSchema.omit({ kind: true }).merge(
  z.object({
    kind: z.literal(BaseBoxKind.BUILDING),
    name: z.string(),
    address: z.string().trim().optional(),
    implanted: z.boolean().default(true),
    hasProblem: z.boolean().default(false),
    buildingType: stringOrObjectId,
    color: stringOrObjectId.optional(),
  }),
);

const BuildingSchema = BaseModelSchema.merge(BuildingDataSchema).merge(
  z.object({
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
    project: stringOrObjectId.or(ProjectSchema),
    cables: z.array(stringOrObjectId).default([]),
    buildingType: stringOrObjectId.or(BuildingTypeSchema),
    color: stringOrObjectId.or(ColorSchema).optional(),
  }),
);
const CreateBuildingDTOSchema = BuildingDataSchema.partial({
  name: true,
  kind: true,
})
  .omit({ cables: true, hasProblem: true })
  .merge(
    z.object({
      external_id: z.any().optional(),
      tags: z.array(stringOrObjectId).default([]).optional(),
      template: stringOrObjectId.optional(),
    }),
  );
const UpdateBuildingDTOSchema = BuildingDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    project: true,
    kind: true,
    cables: true,
    hasProblem: true,
  })
  .partial();

type Building = z.infer<typeof BuildingSchema>;
type CreateBuildingDTO = z.infer<typeof CreateBuildingDTOSchema>;
type UpdateBuildingDTO = z.infer<typeof UpdateBuildingDTOSchema>;

export {
  BuildingSchema,
  Building,
  CreateBuildingDTOSchema,
  CreateBuildingDTO,
  UpdateBuildingDTOSchema,
  UpdateBuildingDTO,
};
