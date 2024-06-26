import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { TagSchema } from './Tag';
import { ProjectSchema } from './Project';
import { ColorSchema } from './Color';
import { CableTypeSchema } from './CableType';
import { BaseBoxSchema } from './BaseBox';
import { BasePointSchema } from './BasePoint';
import { CreateBoxDTOSchema } from './Box';

const CableDataSchema = z.object({
  tags: z.array(stringOrObjectId).default([]),
  project: stringOrObjectId,
  color: stringOrObjectId.optional(),
  cableType: stringOrObjectId,
  boxA: stringOrObjectId,
  boxB: stringOrObjectId,
  ducts: z.array(z.object({ duct: stringOrObjectId, parent: stringOrObjectId })).default([]),
  poles: z.array(
    z.object({
      id: stringOrObjectId,
      reserve: z.number(),
      from: stringOrObjectId.optional(),
      into: stringOrObjectId.optional(),
    }),
  ),
  index: z.number().optional(),
  hierarchyLevel: z.number(),
  name: z.string().trim().optional(),
  fiberNumber: z.number(),
  looseNumber: z.number(),
  observation: z.string().trim().optional(),
  orientationA: z.string(),
  orientationB: z.string(),
  implanted: z.boolean(),
  length: z.number(),
  altitude_length: z.number(),
  ground_length: z.number(),
  loss: z.number(),
});

const CableSchema = BaseModelSchema.merge(CableDataSchema).merge(
  z.object({
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
    project: stringOrObjectId.or(ProjectSchema),
    color: stringOrObjectId.or(ColorSchema).optional(),
    cableType: stringOrObjectId.or(CableTypeSchema),
    boxA: stringOrObjectId.or(BaseBoxSchema),
    boxB: stringOrObjectId.or(BaseBoxSchema),
    // todo fix type once we have duct schema
    // ducts: z.array(z.object({ duct: stringOrObjectId, parent: stringOrObjectId })),
    poles: z.array(
      z.object({
        id: stringOrObjectId.or(BasePointSchema),
        reserve: z.number(),
        // todo fix type once we have duct schema
        from: stringOrObjectId.optional(),
        into: stringOrObjectId.optional(),
      }),
    ),
  }),
);

const CreateCableDTOSchema = CableDataSchema.omit({
  ducts: true,
  loss: true,
  length: true,
  ground_length: true,
  altitude_length: true,
  index: true,
  fiberNumber: true,
  looseNumber: true,
})
  .merge(
    z.object({
      external_id: z.any().optional(),
      boxA: z.union([stringOrObjectId, CreateBoxDTOSchema.omit({ coords: true, project: true, pole: true })]),
      boxB: z.union([stringOrObjectId, CreateBoxDTOSchema.omit({ coords: true, project: true, pole: true })]),
      poles: z.array(
        z.union([
          z.object({
            id: stringOrObjectId,
            reserve: z.number().optional(),
            from: stringOrObjectId.optional(),
            into: stringOrObjectId.optional(),
          }),
          z.object({
            lat: z.number(),
            lng: z.number(),
          }),
        ]),
      ),
    }),
  )
  .partial({
    orientationA: true,
    orientationB: true,
    tags: true,
  });
const UpdateCableDTOSchema = CreateCableDTOSchema.omit({ boxA: true, boxB: true, project: true }).partial();

type Cable = z.infer<typeof CableSchema>;
type CreateCableDTO = z.infer<typeof CreateCableDTOSchema>;
type UpdateCableDTO = z.infer<typeof UpdateCableDTOSchema>;

export { CableSchema, Cable, CreateCableDTOSchema, CreateCableDTO, UpdateCableDTOSchema, UpdateCableDTO };
