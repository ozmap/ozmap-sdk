import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { TagSchema } from './Tag';

export enum BasePointKind {
  POLE = 'pole',
  POINT = 'point',
  JUNCTION_BOX = 'junctionBox',
}

const BasePointDataSchema = z.object({
  adjacents: z.array(stringOrObjectId).default([]),
  tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
  kind: z.nativeEnum(BasePointKind),
  coords: z
    .array(z.number())
    .length(2)
    .refine(([lng, lat]) => lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180),
});

const BasePointSchema = BaseModelSchema.merge(BasePointDataSchema);

type BasePoint = z.infer<typeof BasePointSchema>;

export { BasePointSchema, BasePoint };
