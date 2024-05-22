import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

enum SplitterConnectionType {
  FUSION,
  CONNECTOR,
}

const SplitterTypeDataSchema = z.object({
  code: z.string().trim(),
  isDrop: z.boolean(),
  brand: z.string().trim().optional(),
  mold: z.string().trim().optional(),
  description: z.string().trim().optional(),
  ratio: z.object({
    input: z.number().min(1),
    output: z.number().min(2),
  }),
  isBalanced: z.boolean().default(true),
  prefix: z.string().default('Splitter '),
  size: z.number().min(0).default(0),
  inputConnectionType: z.nativeEnum(SplitterConnectionType),
  outputConnectionType: z.nativeEnum(SplitterConnectionType),
  attenuation: z.array(z.number()),
});

const SplitterTypeSchema = BaseModelSchema.merge(SplitterTypeDataSchema);
const CreateSplitterTypeDTOSchema = SplitterTypeDataSchema.partial({
  size: true,
  isBalanced: true,
  prefix: true,
}).merge(z.object({ external_id: z.any().optional() }));
const UpdateSplitterTypeDTOSchema = SplitterTypeDataSchema.merge(
  z.object({ external_id: z.any().optional() }),
).partial();

type SplitterType = z.infer<typeof SplitterTypeSchema>;
type CreateSplitterTypeDTO = z.infer<typeof CreateSplitterTypeDTOSchema>;
type UpdateSplitterTypeDTO = z.infer<typeof UpdateSplitterTypeDTOSchema>;

export {
  SplitterTypeSchema,
  SplitterType,
  CreateSplitterTypeDTOSchema,
  CreateSplitterTypeDTO,
  UpdateSplitterTypeDTOSchema,
  UpdateSplitterTypeDTO,
  SplitterConnectionType,
};
