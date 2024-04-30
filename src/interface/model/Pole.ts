import { z } from 'zod';

import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { BasePointDataSchema, BasePointSchema } from './BasePoint';
import { PoleTypeSchema } from './PoleType';
import { ColorSchema } from './Color';
import { TagSchema } from './Tag';

enum PoleLicensingStatus {
  UNKNOWN,
  PENDING,
  LICENSED,
}

const PoleDataSchema = BasePointDataSchema.omit({ kind: true }).merge(
  z.object({
    name: z.string().trim(),
    usable: z.boolean().default(true),
    kind: z.literal('POLE'),
    observation: z.string().trim().default(''),
    color: stringOrObjectId.optional(),
    poleType: stringOrObjectId,
    address: z.string().trim().optional(),
    licensing: z
      .object({
        status: z.nativeEnum(PoleLicensingStatus).default(PoleLicensingStatus.UNKNOWN),
        protocol: z.string().nullish(),
      })
      .default({
        status: PoleLicensingStatus.UNKNOWN,
        protocol: null,
      }),
  }),
);

const PoleSchema = BaseModelSchema.merge(PoleDataSchema).merge(
  z.object({
    adjacents: z.array(stringOrObjectId.or(BasePointSchema)).default([]),
    tags: z.array(stringOrObjectId.or(TagSchema)).default([]),
    poleType: stringOrObjectId.or(PoleTypeSchema),
    color: stringOrObjectId.or(ColorSchema).optional(),
  }),
);
const CreatePoleDTOSchema = PoleDataSchema.omit({ kind: true })
  .merge(z.object({ lat: z.number(), lng: z.number() }))
  .refine((data) => !data.coords && (data.lat == null || data.lng == null), 'Color must be a string or ObjectId');
const UpdatePoleDTOSchema = PoleDataSchema.omit({ kind: true })
  .merge(
    z.object({
      lat: z.number(),
      lng: z.number(),
    }),
  )
  .partial();

type Pole = z.infer<typeof PoleSchema>;
type CreatePoleDTO = z.infer<typeof CreatePoleDTOSchema>;
type UpdatePoleDTO = z.infer<typeof UpdatePoleDTOSchema>;

export { PoleSchema, Pole, CreatePoleDTOSchema, CreatePoleDTO, UpdatePoleDTOSchema, UpdatePoleDTO };
