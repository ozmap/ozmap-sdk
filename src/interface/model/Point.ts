import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';
import { BasePointDataSchema, BasePointKind } from './BasePoint';

const PointDataSchema = BasePointDataSchema.omit({ kind: true }).merge(
  z.object({ kind: z.literal(BasePointKind.POINT) }),
);

const PointSchema = BaseModelSchema.merge(PointDataSchema);
const CreatePointDTOSchema = PointDataSchema.merge(z.object({}));
const UpdatePointDTOSchema = z.object({});

type Point = z.infer<typeof PointSchema>;
type CreatePointDTO = z.infer<typeof CreatePointDTOSchema>;
type UpdatePointDTO = z.infer<typeof UpdatePointDTOSchema>;

export { PointSchema, Point, CreatePointDTOSchema, CreatePointDTO, UpdatePointDTOSchema, UpdatePointDTO };
