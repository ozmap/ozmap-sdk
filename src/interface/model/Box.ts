import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BaseBoxDataSchema, BaseBoxKind } from './BaseBox';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';
import { BasePointSchema } from './BasePoint';
import { ColorSchema } from './Color';
import { BoxTypeSchema } from './BoxType';

const BoxDataSchema = BaseBoxDataSchema.omit({ kind: true }).merge(
  z.object({
    kind: z.literal(BaseBoxKind.BOX),
    color: stringOrObjectId.optional(),
    fill_color: stringOrObjectId.optional(),
    name: z.string(),
    address: z.string().optional(),
    shared: z.boolean().default(false),
    draft: z.boolean().default(false),
    default_reserve: z.number().default(0),
    hierarchyLevel: z.number(),
    boxType: stringOrObjectId,
    pole: stringOrObjectId,
    certified: z.boolean().default(false),
    implanted: z.boolean(),
  }),
);

const BoxSchema = BaseModelSchema.merge(BoxDataSchema).merge(
  z.object({
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
    project: stringOrObjectId.or(ProjectSchema),
    pole: stringOrObjectId.or(BasePointSchema),
    color: stringOrObjectId.or(ColorSchema).optional(),
    fill_color: stringOrObjectId.or(ColorSchema).optional(),
    boxType: stringOrObjectId.or(BoxTypeSchema),
    underground: z.boolean(),
    // todo cable schema, mas cuidar com referência circular
    cables: z.array(stringOrObjectId).default([]),
  }),
);
const CreateBoxDTOSchema = BoxDataSchema.partial({
  name: true,
  pole: true,
  kind: true,
})
  .omit({ cables: true })
  .merge(
    z.object({
      max_distance: z.number().optional(),
      external_id: z.any().optional(),
      template: stringOrObjectId.optional(),
      tags: z.array(stringOrObjectId).default([]).optional(),
      shared: z.boolean().default(false).optional(),
      draft: z.boolean().default(false).optional(),
      certified: z.boolean().default(false).optional(),
      default_reserve: z.number().default(0).optional(),
    }),
  );
const UpdateBoxDTOSchema = BoxDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    project: true,
    kind: true,
    cables: true,
  })
  .partial();

type Box = z.infer<typeof BoxSchema>;
type CreateBoxDTO = z.infer<typeof CreateBoxDTOSchema>;
type UpdateBoxDTO = z.infer<typeof UpdateBoxDTOSchema>;

export { BoxSchema, Box, CreateBoxDTOSchema, CreateBoxDTO, UpdateBoxDTOSchema, UpdateBoxDTO };
