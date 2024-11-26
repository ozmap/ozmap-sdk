import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

const RadioDataSchema = z.object({
  radioType: stringOrObjectId,
  name: z.string().trim(),
  parent: stringOrObjectId,
  shelf: stringOrObjectId,
  radioCapacity: z.number().optional(),
  observation: z.string().optional(),
  serialNumber: z.string().optional(),
  macAddress: z.string().optional(),
  port_labels: z.array(z.string()).optional(),
  label: z.string().optional(),
  connectables: z.array(stringOrObjectId).optional(),
  tags: z.array(stringOrObjectId).default([]).optional(),
  configuration: z.string().optional(),
  potency: z.number().optional(),
  kind: z.string().optional(),
  size: z.number().optional(),
  implanted: z.boolean().optional(),
  project: stringOrObjectId.optional(),
  isDrop: z.boolean().optional(),
});

const RadioSchema = BaseModelSchema.merge(RadioDataSchema);
const CreateRadioDTOSchema = RadioDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateRadioDTOSchema = RadioDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    parent: true,
    radioType: true,
    project: true,
    kind: true,
    isDrop: true,
    connectables: true,
  })
  .partial();

type Radio = z.infer<typeof RadioSchema>;
type CreateRadioDTO = z.infer<typeof CreateRadioDTOSchema>;
type UpdateRadioDTO = z.infer<typeof UpdateRadioDTOSchema>;

export { RadioSchema, Radio, CreateRadioDTOSchema, CreateRadioDTO, UpdateRadioDTOSchema, UpdateRadioDTO };
