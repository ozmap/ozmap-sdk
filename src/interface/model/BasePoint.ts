import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

enum BasePointKind {
  POLE = 'Pole',
  POINT = 'Point',
  JUNCTION_BOX = 'JunctionBox',
}

const BasePointDataSchema = z.object({
  adjacents: z.array(stringOrObjectId).default([]),
  tags: z.array(stringOrObjectId).default([]),
  kind: z.nativeEnum(BasePointKind),
  coords: z
    .array(z.number())
    .length(2)
    .refine(([lng, lat]) => lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180),
});

const BasePointSchema = BaseModelSchema.merge(BasePointDataSchema);

type BasePoint = z.infer<typeof BasePointSchema>;

export { BasePointDataSchema, BasePointSchema, BasePoint, BasePointKind };
