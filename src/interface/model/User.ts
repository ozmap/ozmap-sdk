import { z } from 'zod';
import { stringOrObjectId, BaseModelSchema } from './BaseModel';
import { ProjectGroupSchema } from './ProjectGroup';
import { ProjectSchema } from './Project';
import { RoleSchema } from './Role';

const UserDataSchema = z.object({
  username: z.string().trim(),
  allUsers: z.boolean().default(false),
  email: z.string().email().trim(),
  resources: z.array(z.string()),
  name: z.string().trim(),
  phone: z.string().trim().optional(),
  observation: z.string().trim().optional(),
  role: stringOrObjectId,
  browserData: z.any().nullish(),
  apiKey: z.string().optional(),
  projectGroups: z.array(z.object({ group: stringOrObjectId })),
  projects: z.array(z.object({ project: stringOrObjectId, role: stringOrObjectId, fromGroup: z.boolean() })),
  locale: z.string().nullish(),
  email_confirmed: z.boolean().default(false),
});

const UserSchema = BaseModelSchema.merge(UserDataSchema).merge(
  z.object({
    projectGroups: z.union([
      z.array(z.object({ group: stringOrObjectId })),
      z.array(z.object({ group: ProjectGroupSchema })),
    ]),
    projects: z.union([
      z.array(z.object({ project: stringOrObjectId, role: stringOrObjectId, fromGroup: z.boolean() })),
      z.array(z.object({ project: ProjectSchema, role: stringOrObjectId, fromGroup: z.boolean() })),
    ]),
    role: z.union([stringOrObjectId, RoleSchema]),
  }),
);

const CreateUserDTOSchema = UserDataSchema.merge(z.object({ external_id: z.any().optional() }));
const UpdateUserDTOSchema = UserDataSchema.merge(z.object({ external_id: z.any().optional() })).partial();

type User = z.infer<typeof UserSchema>;
type CreateUserDTO = z.infer<typeof CreateUserDTOSchema>;
type UpdateUserDTO = z.infer<typeof UpdateUserDTOSchema>;

export { UserSchema, User, CreateUserDTOSchema, CreateUserDTO, UpdateUserDTOSchema, UpdateUserDTO };
