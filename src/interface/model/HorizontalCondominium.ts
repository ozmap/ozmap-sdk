import { z } from 'zod';
import { BaseModelSchema, coordinates, externalId, stringOrObjectId } from './BaseModel';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';

const HorizontalCondominiumDataSchema = z.object({
  polygon: z.object({
    type: z.enum(['Polygon']),
    coordinates: z.array(z.array(coordinates)),
  }),
  project: stringOrObjectId,
  name: z.string().trim().nullish(),
  observation: z.string().nullish(),
  address: z.string().nullish(),
  color: z.string().nullish(),
  tags: z.array(stringOrObjectId),
});

const HorizontalCondominiumSchema = BaseModelSchema.merge(HorizontalCondominiumDataSchema).merge(
  z.object({
    project: z.union([stringOrObjectId, ProjectSchema]),
    tags: z.union([z.array(stringOrObjectId), z.array(TagSchema)]),
  }),
);
const CreateHorizontalCondominiumDTOSchema = HorizontalCondominiumDataSchema.merge(
  z.object({ external_id: externalId }),
);
const UpdateHorizontalCondominiumDTOSchema = HorizontalCondominiumDataSchema.partial().merge(
  z.object({ external_id: externalId }),
);

type HorizontalCondominium = z.infer<typeof HorizontalCondominiumSchema>;
type CreateHorizontalCondominiumDTO = z.infer<typeof CreateHorizontalCondominiumDTOSchema>;
type UpdateHorizontalCondominiumDTO = z.infer<typeof UpdateHorizontalCondominiumDTOSchema>;

export {
  HorizontalCondominiumSchema,
  HorizontalCondominium,
  CreateHorizontalCondominiumDTOSchema,
  CreateHorizontalCondominiumDTO,
  UpdateHorizontalCondominiumDTOSchema,
  UpdateHorizontalCondominiumDTO,
};
