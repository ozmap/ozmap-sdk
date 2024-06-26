import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BaseBoxDataSchema, BaseBoxKind } from './BaseBox';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';
import { BasePointSchema } from './BasePoint';
import { PopTypeSchema } from './PopType';

const PopDataSchema = BaseBoxDataSchema.omit({ kind: true }).merge(
  z.object({
    kind: z.literal(BaseBoxKind.POP),
    name: z.string(),
    popType: stringOrObjectId,
    // towers?
    shared: z.boolean().default(false),
    hierarchyLevel: z.number(),
    draft: z.boolean().default(false),
    implanted: z.boolean(),
    certified: z.boolean().default(false),
    structureOrder: z.array(z.string()),
    address: z.string().optional(),
    pole: stringOrObjectId,
  }),
);

const PopSchema = BaseModelSchema.merge(PopDataSchema).merge(
  z.object({
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
    project: stringOrObjectId.or(ProjectSchema),
    pole: stringOrObjectId.or(BasePointSchema),
    popType: stringOrObjectId.or(PopTypeSchema),
    // todo cable schema, mas cuidar com referência circular
    cables: z.array(stringOrObjectId).default([]),
  }),
);
const CreatePopDTOSchema = PopDataSchema.partial({
  name: true,
  pole: true,
  kind: true,
  structureOrder: true,
})
  .omit({ cables: true })
  .merge(
    z.object({
      external_id: z.any().optional(),
      tags: z.array(stringOrObjectId).default([]).optional(),
      shared: z.boolean().default(false).optional(),
      draft: z.boolean().default(false).optional(),
      certified: z.boolean().default(false).optional(),
    }),
  );
const UpdatePopDTOSchema = PopDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    project: true,
    kind: true,
    cables: true,
  })
  .partial();

type Pop = z.infer<typeof PopSchema>;
type CreatePopDTO = z.infer<typeof CreatePopDTOSchema>;
type UpdatePopDTO = z.infer<typeof UpdatePopDTOSchema>;

export { PopSchema, Pop, CreatePopDTOSchema, CreatePopDTO, UpdatePopDTOSchema, UpdatePopDTO };
