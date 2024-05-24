import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId, coordinates, externalId } from './BaseModel';

const ProspectDataSchema = z.object({
  tags: z.array(stringOrObjectId).default([]),
  phone: z.string().nullish(),
  code: z.string().nullish(),
  address: z.string().nullish(),
  name: z.string().nullish(),
  viable: z.boolean().nullish(),
  observation: z.string().nullish(),
  coords: coordinates.nullish(),
});

const ProspectSchema = BaseModelSchema.merge(ProspectDataSchema);

const CreateProspectDTOSchema = ProspectDataSchema.merge(
  z.object({
    external_id: externalId,
  }),
);
const UpdateProspectDTOSchema = CreateProspectDTOSchema.merge(z.object({ external_id: externalId })).partial();

type Prospect = z.infer<typeof ProspectSchema>;
type CreateProspectDTO = z.infer<typeof CreateProspectDTOSchema>;
type UpdateProspectDTO = z.infer<typeof UpdateProspectDTOSchema>;

export {
  ProspectSchema,
  Prospect,
  CreateProspectDTOSchema,
  CreateProspectDTO,
  UpdateProspectDTOSchema,
  UpdateProspectDTO,
};
