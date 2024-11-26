import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

const AntennaDataSchema = z.object({
  antennaType: stringOrObjectId,
  name: z.string().trim(),
  parent: stringOrObjectId,
  azymuth: z.number().default(0),
  angle: z.number().default(0),
  link: stringOrObjectId.nullable(),
  tilt: z.number().default(0),
  observation: z.string().default(''),
  label: z.string().default(''),
  tags: z.array(stringOrObjectId).default([]).optional(),
  height: z.number().default(0).optional(),
  diversity: z.boolean().default(false).optional(),
  implanted: z.boolean().default(false).optional(),
  tower: stringOrObjectId.optional(),
});

const AntennaSchema = BaseModelSchema.merge(AntennaDataSchema);
const CreateAntennaDTOSchema = AntennaDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateAntennaDTOSchema = AntennaDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    parent: true,
    tower: true,
  })
  .optional();

type Antenna = z.infer<typeof AntennaSchema>;
type CreateAntennaDTO = z.infer<typeof CreateAntennaDTOSchema>;
type UpdateAntennaDTO = z.infer<typeof UpdateAntennaDTOSchema>;

export { AntennaSchema, Antenna, CreateAntennaDTOSchema, CreateAntennaDTO, UpdateAntennaDTOSchema, UpdateAntennaDTO };
