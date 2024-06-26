import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { DuctTypeSchema, SubDuctStructureSchema } from './DuctType';
import { ProjectSchema } from './Project';
import { JunctionBoxSchema } from './JunctionBox';
import { PointSchema } from './Point';
import { TagSchema } from './Tag';

// type DuctStructureSchemaType = {
//   ductType?: string | ObjectId | null;
//   color?: string | ObjectId | null;
//   subDucts?: DuctStructureSchemaType[] | null;
// };
//
// const DuctStructureSchema: ZodSchema<DuctStructureSchemaType> = z.lazy(() =>
//   z.object({
//     ductType: stringOrObjectId.nullish(),
//     color: stringOrObjectId.nullish(),
//     subDucts: z.array(DuctStructureSchema).nullish(),
//   }),
// );

const DuctDataSchema = z.object({
  name: z.string().trim(),
  observation: z.string().trim().nullish(),
  implanted: z.boolean().default(true),
  project: stringOrObjectId,
  ductType: stringOrObjectId,
  color: stringOrObjectId.nullish(),
  length: z.number().positive(),
  edgeA: stringOrObjectId,
  edgeB: stringOrObjectId,
  shared: z.boolean().default(false),
  immediateParent: stringOrObjectId.nullish(),
  parent: stringOrObjectId.nullish(),
  points: z.array(stringOrObjectId),
  tags: z.array(stringOrObjectId),
  index: z.number().int().positive(),
  typeColor: z.object({
    regular: z.string().trim(),
    notImplanted: z.string().trim(),
  }),
});

const DuctSchema = BaseModelSchema.merge(DuctDataSchema).merge(
  z.object({
    project: z.union([stringOrObjectId, ProjectSchema]),
    ductType: z.union([stringOrObjectId, DuctTypeSchema]),
    edgeA: z.union([stringOrObjectId, JunctionBoxSchema]),
    edgeB: z.union([stringOrObjectId, JunctionBoxSchema]),
    points: z.union([z.array(stringOrObjectId), z.array(PointSchema)]),
    tags: z.union([z.array(stringOrObjectId), z.array(TagSchema)]),
  }),
);
const CreateDuctDTOSchema = DuctDataSchema.omit({
  length: true,
  immediateParent: true,
  parent: true,
  index: true,
  typeColor: true,
})
  .partial({ name: true, implanted: true })
  .merge(z.object({ external_id: z.any().optional(), subDucts: z.array(SubDuctStructureSchema).optional() }));
const UpdateDuctDTOSchema = DuctDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type Duct = z.infer<typeof DuctSchema> & {
  parent?: z.infer<typeof stringOrObjectId> | Duct | null;
  immediateParent?: z.infer<typeof stringOrObjectId> | Duct | null;
};
type CreateDuctDTO = z.infer<typeof CreateDuctDTOSchema>;
type UpdateDuctDTO = z.infer<typeof UpdateDuctDTOSchema>;

export { DuctSchema, Duct, CreateDuctDTOSchema, CreateDuctDTO, UpdateDuctDTOSchema, UpdateDuctDTO };
