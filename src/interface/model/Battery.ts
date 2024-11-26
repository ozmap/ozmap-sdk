import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';

const BatteryDataSchema = z.object({
  name: z.string().trim(),
  parent: stringOrObjectId,
  shelf: stringOrObjectId,
  draft: z.boolean().optional(),
  certified: z.boolean().optional(),
  implanted: z.boolean().optional(),
  label: z.string().optional(),
  tags: z.array(stringOrObjectId).default([]).optional(),
  batteryType: stringOrObjectId,
  description: z.string().optional(),
  autonomy: z.string().optional(),
  fabricationDate: z.date().optional(),
  serialNumber: z.string().optional(),
  size: z.number().optional(),
  project: stringOrObjectId.optional(),
});

const BatterySchema = BaseModelSchema.merge(BatteryDataSchema);
const CreateBatteryDTOSchema = BatteryDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateBatteryDTOSchema = BatteryDataSchema.merge(z.object({ external_id: z.any().optional() }))
  .omit({
    parent: true,
    batteryType: true,
    project: true,
    draft: true,
    certified: true,
  })
  .partial();

type Battery = z.infer<typeof BatterySchema>;
type CreateBatteryDTO = z.infer<typeof CreateBatteryDTOSchema>;
type UpdateBatteryDTO = z.infer<typeof UpdateBatteryDTOSchema>;

export { BatterySchema, Battery, CreateBatteryDTOSchema, CreateBatteryDTO, UpdateBatteryDTOSchema, UpdateBatteryDTO };
