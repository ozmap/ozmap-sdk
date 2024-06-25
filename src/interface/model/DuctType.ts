import { z, ZodSchema } from 'zod';
import ObjectId from 'bson-objectid';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

type SubDuctStructure = {
  ductType?: string | ObjectId | null;
  color?: string | ObjectId | null;
  subDucts?: SubDuctStructure[] | null;
};

const SubDuctStructureSchema: ZodSchema<SubDuctStructure> = z.lazy(() =>
  z.object({
    ductType: stringOrObjectId.nullish(),
    color: stringOrObjectId.nullish(),
    subDucts: z.array(SubDuctStructureSchema).nullish(),
  }),
);

const DuctTypeDataSchema = z.object({
  code: z.string().trim(),
  brand: z.string().trim().nullish(),
  mold: z.string().trim().nullish(),
  description: z.string().trim().nullish(),
  subDucts: z.array(SubDuctStructureSchema).nullish(),
  config: z
    .object({
      regular: z.object({
        color: z.string().default('#000000'),
        weight: z.number().default(10),
      }),
      notImplanted: z.object({
        color: z.string().default('#606060A5'),
        weight: z.number().default(10),
      }),
    })
    .default({ regular: {}, notImplanted: {} }),
});

const DuctTypeSchema = BaseModelSchema.merge(DuctTypeDataSchema);
const CreateDuctTypeDTOSchema = DuctTypeDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateDuctTypeDTOSchema = DuctTypeDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type DuctType = z.infer<typeof DuctTypeSchema>;
type CreateDuctTypeDTO = z.infer<typeof CreateDuctTypeDTOSchema>;
type UpdateDuctTypeDTO = z.infer<typeof UpdateDuctTypeDTOSchema>;

export {
  SubDuctStructure,
  SubDuctStructureSchema,
  DuctTypeSchema,
  DuctType,
  CreateDuctTypeDTOSchema,
  CreateDuctTypeDTO,
  UpdateDuctTypeDTOSchema,
  UpdateDuctTypeDTO,
};
