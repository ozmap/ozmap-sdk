import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const RoleDataSchema = z.object({
  name: z.string().trim(),
  actions: z.array(z.string()),
  defaultDropSize: z.number().nullish(),
  defaultRadius: z.number().nullish(),
});

const RoleSchema = BaseModelSchema.merge(RoleDataSchema);

type Role = z.infer<typeof RoleSchema>;

export { RoleSchema, Role };
