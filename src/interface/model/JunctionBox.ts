import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BasePointDataSchema, BasePointSchema } from './BasePoint';
import { JunctionBoxTypeSchema } from './JunctionBoxType';
import { ColorSchema } from './Color';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';

const JunctionBoxDataSchema = BasePointDataSchema.omit({ kind: true }).merge(
  z.object({
    name: z.string().trim(),
    observation: z.string().trim().optional(),
    kind: z.literal('JUNCTION_BOX'),
    address: z.string().trim().optional(),
    implanted: z.boolean().default(false),
    project: stringOrObjectId,
    junctionBoxType: stringOrObjectId,
    color: stringOrObjectId.optional(),
    typeColor: z.string(),
    shared: z.boolean().default(false),
  }),
);

const JunctionBoxSchema = BaseModelSchema.merge(JunctionBoxDataSchema).merge(
  z.object({
    junctionBoxType: stringOrObjectId.or(JunctionBoxTypeSchema),
    project: stringOrObjectId.or(ProjectSchema),
    color: stringOrObjectId.or(ColorSchema).optional(),
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
    adjacents: z.array(stringOrObjectId.or(BasePointSchema)).default([]),
  }),
);
const CreateJunctionBoxDTOSchema = JunctionBoxDataSchema.omit({ kind: true, typeColor: true }).merge(
  z.object({ external_id: z.any().optional() }),
);
const UpdateJunctionBoxDTOSchema = JunctionBoxDataSchema.omit({ kind: true, typeColor: true, project: true }).partial();

type JunctionBox = z.infer<typeof JunctionBoxSchema>;
type CreateJunctionBoxDTO = z.infer<typeof CreateJunctionBoxDTOSchema>;
type UpdateJunctionBoxDTO = z.infer<typeof UpdateJunctionBoxDTOSchema>;

export {
  JunctionBoxSchema,
  JunctionBox,
  CreateJunctionBoxDTOSchema,
  CreateJunctionBoxDTO,
  UpdateJunctionBoxDTOSchema,
  UpdateJunctionBoxDTO,
};
