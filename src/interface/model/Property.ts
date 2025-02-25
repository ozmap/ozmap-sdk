import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BaseBoxDataSchema, BaseBoxKind } from './BaseBox';
import { ProjectSchema } from './Project';
import { TagSchema } from './Tag';
import { BasePointSchema } from './BasePoint';
import { CreateFTTHClientDTOSchema, FTTHClientSchema } from './FTTHClient';
import { BuildingSchema } from './Building';
import { BoxSchema } from './Box';
import { CableSchema } from './Cable';

const PropertyDataSchema = BaseBoxDataSchema.omit({ kind: true }).merge(
  z.object({
    kind: z.literal(BaseBoxKind.PROPERTY),
    parent: z.object({ id: stringOrObjectId }).optional(),
    address: z.string().nullish(),
    box: stringOrObjectId.nullish(),
    pole: stringOrObjectId.nullish(),
    observation: z.string().nullish(),
    potencyRead: z.number().nullish(),
    client: stringOrObjectId.nullish(),
    drop: stringOrObjectId.nullish(),
  }),
);

const PropertySchema = BaseModelSchema.merge(PropertyDataSchema)
  .omit({ name: true, cables: true })
  .merge(
    z.object({
      client: FTTHClientSchema,
      parent: z.object({ id: stringOrObjectId.or(BuildingSchema) }).optional(),
      tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
      project: stringOrObjectId.or(ProjectSchema),
      box: stringOrObjectId.or(BoxSchema).optional(),
      pole: stringOrObjectId.or(BasePointSchema).optional(),
      drop: stringOrObjectId.or(CableSchema).optional(),
      connections: z
        .array(
          z.object({
            id: stringOrObjectId,
            name: z.string(),
            kind: z.string(),
            port: z.number().int().positive(),
            implanted: z.boolean().default(true),
            fiber: stringOrObjectId,
          }),
        )
        .default([]),
    }),
  );

const CreatePropertyDTOSchema = PropertyDataSchema.partial({
  name: true,
  pole: true,
  kind: true,
  tags: true,
  coords: true,
})
  .omit({ parent: true, drop: true, cables: true })
  .merge(
    z.object({
      external_id: z.any().optional(),
      client: z.union([CreateFTTHClientDTOSchema, stringOrObjectId]).optional(),
      auto_connect: z.boolean().optional(),
      force: z.boolean().optional(),
      connector: stringOrObjectId.nullish(),
    }),
  );

const UpdatePropertyDTOSchema = PropertyDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    project: true,
    kind: true,
    cables: true,
    drop: true,
    parent: true,
  })
  .merge(
    z.object({
      client: z.union([CreateFTTHClientDTOSchema, stringOrObjectId]).nullish(),
      auto_connect: z.boolean().optional(),
      force: z.boolean().optional(),
      connector: stringOrObjectId.nullish(),
    }),
  )
  .partial();

type Property = z.infer<typeof PropertySchema>;
type CreatePropertyDTO = z.infer<typeof CreatePropertyDTOSchema>;
type UpdatePropertyDTO = z.infer<typeof UpdatePropertyDTOSchema>;

export {
  PropertySchema,
  Property,
  CreatePropertyDTOSchema,
  CreatePropertyDTO,
  UpdatePropertyDTOSchema,
  UpdatePropertyDTO,
};
