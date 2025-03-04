import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BasePointDataSchema, BasePointKind, BasePointSchema } from './BasePoint';
import { TagSchema } from './Tag';

const PointDataSchema = BasePointDataSchema.omit({ kind: true }).merge(
  z.object({ kind: z.literal(BasePointKind.POINT) }),
);

const PointSchema = BaseModelSchema.merge(PointDataSchema).merge(
  z.object({
    adjacents: z.array(stringOrObjectId.or(BasePointSchema)).default([]),
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
  }),
);
const CreatePointDTOSchema = PointDataSchema.omit({ kind: true, adjacents: true })
  .partial({ tags: true })
  .merge(z.object({ external_id: z.any().optional() }));
const UpdatePointDTOSchema = z.object({});

type Point = z.infer<typeof PointSchema>;
type CreatePointDTO = z.infer<typeof CreatePointDTOSchema>;
type UpdatePointDTO = z.infer<typeof UpdatePointDTOSchema>;

export { PointSchema, Point, CreatePointDTOSchema, CreatePointDTO, UpdatePointDTOSchema, UpdatePointDTO };
