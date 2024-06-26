import { z } from 'zod';
import { BaseModelSchema, coordinates, externalId, stringOrObjectId } from './BaseModel';
import { UserSchema } from './User';
import { ProjectSchema } from './Project';
import { PendencyTypeSchema } from './PendencyType';
import { TagSchema } from './Tag';

const PendencyDataSchema = z.object({
  owner: stringOrObjectId,
  project: stringOrObjectId,
  pendencyType: stringOrObjectId,
  color: stringOrObjectId.nullish(),
  tags: z.array(stringOrObjectId).default([]),
  responsibles: z.array(stringOrObjectId).default([]),
  solved: z.boolean().nullish().default(false),
  name: z.string().trim().nullish(),
  description: z.string().trim().nullish(),
  coords: coordinates,
  convertedTo: z
    .object({
      kind: z.string(),
      element: stringOrObjectId,
    })
    .nullish(),
});

const PendencySchema = BaseModelSchema.merge(PendencyDataSchema).merge(
  z.object({
    owner: z.union([stringOrObjectId, UserSchema]),
    project: z.union([stringOrObjectId, ProjectSchema]),
    pendencyType: z.union([stringOrObjectId, PendencyTypeSchema]),
    tags: z.union([z.array(stringOrObjectId), z.array(TagSchema)]),
    responsibles: z.union([z.array(stringOrObjectId), z.array(UserSchema)]),
  }),
);
const CreatePendencyDTOSchema = PendencyDataSchema.merge(z.object({ external_id: externalId }))
  .partial({
    tags: true,
    responsibles: true,
  })
  .omit({ convertedTo: true });
const UpdatePendencyDTOSchema = PendencyDataSchema.merge(z.object({ external_id: externalId }))
  .omit({ convertedTo: true })
  .partial();

type Pendency = z.infer<typeof PendencySchema>;
type CreatePendencyDTO = z.infer<typeof CreatePendencyDTOSchema>;
type UpdatePendencyDTO = z.infer<typeof UpdatePendencyDTOSchema>;

export {
  PendencySchema,
  Pendency,
  CreatePendencyDTOSchema,
  CreatePendencyDTO,
  UpdatePendencyDTOSchema,
  UpdatePendencyDTO,
};
