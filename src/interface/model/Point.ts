import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';
import { BasePointDataSchema } from './BasePoint';

const PointDataSchema = BasePointDataSchema.merge(z.object({}));

const PointSchema = BaseModelSchema.merge(PointDataSchema);
const CreatePointDTOSchema = PointDataSchema.merge(z.object({}));
const UpdatePointDTOSchema = z.object({});

type Point = z.infer<typeof PointSchema>;
type CreatePointDTO = z.infer<typeof CreatePointDTOSchema>;
type UpdatePointDTO = z.infer<typeof UpdatePointDTOSchema>;

export { PointSchema, Point, CreatePointDTOSchema, CreatePointDTO, UpdatePointDTOSchema, UpdatePointDTO };
