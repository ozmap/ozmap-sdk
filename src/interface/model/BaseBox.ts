import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

enum BaseBoxKind {
  BOX = 'Box',
  BUILDING = 'Building',
  PROPERTY = 'JunctionBox',
  POP = 'Pop',
}

const BaseBoxDataSchema = z.object({
  tags: z.array(stringOrObjectId).default([]),
  project: stringOrObjectId,
  cables: z.array(stringOrObjectId).default([]),
  pole: stringOrObjectId.optional(),
  towers: z.array(stringOrObjectId).default([]),
  name: z.string().trim().optional(),
  kind: z.nativeEnum(BaseBoxKind),
  observation: z.string().trim().optional(),
  coords: z
    .array(z.number())
    .length(2)
    .refine(([lng, lat]) => lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180),
});

const BaseBoxSchema = BaseModelSchema.merge(BaseBoxDataSchema);

type BaseBox = z.infer<typeof BaseBoxSchema>;

export { BaseBoxDataSchema, BaseBoxSchema, BaseBox, BaseBoxKind };
