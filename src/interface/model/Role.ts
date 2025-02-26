import { z } from 'zod';
import { BaseModelSchema } from './BaseModel';

const RoleDataSchema = z.object({
  name: z.string().trim(),
  actions: z.array(z.string()),
  defaultDropSize: z.number().nullish(),
  defaultRadius: z.number().nullish(),
});

const RoleSchema = BaseModelSchema.merge(RoleDataSchema);
const CreateRoleDTOSchema = RoleDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateRoleDTOSchema = RoleDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type Role = z.infer<typeof RoleSchema>;
type CreateRoleDTO = z.infer<typeof CreateRoleDTOSchema>;
type UpdateRoleDTO = z.infer<typeof UpdateRoleDTOSchema>;

export { RoleSchema, Role, CreateRoleDTOSchema, CreateRoleDTO, UpdateRoleDTOSchema, UpdateRoleDTO };
