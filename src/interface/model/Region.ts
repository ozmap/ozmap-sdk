import { z } from 'zod';
import { BaseModelSchema, coordinates, stringOrObjectId } from './BaseModel';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';
import { RegionTypeSchema } from './RegionType';

const RegionDataSchema = z.object({
  polygon: z.object({
    type: z.enum(['Polygon']),
    coordinates: z.array(z.array(coordinates)),
  }),
  name: z.string().trim().nullish(),
  observation: z.string().nullish(),
  regionType: stringOrObjectId,
  color: z.string().nullish(),
  tags: z.array(stringOrObjectId),
  projects: z.array(stringOrObjectId),
  borderColor: z.string().nullish(),
});

const RegionSchema = BaseModelSchema.merge(RegionDataSchema).merge(
  z.object({
    projects: z.union([z.array(stringOrObjectId), z.array(ProjectSchema)]),
    tags: z.union([z.array(stringOrObjectId), z.array(TagSchema)]),
    regionType: z.union([stringOrObjectId, RegionTypeSchema]),
  }),
);
const CreateRegionDTOSchema = RegionDataSchema.merge(z.object({}));
const UpdateRegionDTOSchema = RegionDataSchema.partial();

type Region = z.infer<typeof RegionSchema>;
type CreateRegionDTO = z.infer<typeof CreateRegionDTOSchema>;
type UpdateRegionDTO = z.infer<typeof UpdateRegionDTOSchema>;

export { RegionSchema, Region, CreateRegionDTOSchema, CreateRegionDTO, UpdateRegionDTOSchema, UpdateRegionDTO };
