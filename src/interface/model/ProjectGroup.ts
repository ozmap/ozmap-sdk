import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from './BaseModel';
import { ProjectSchema } from './Project';

const ProjectGroupDataSchema = z.object({
  name: z.string(),
  hasLogo: z.boolean().default(false),
  projects: z.array(
    z.object({
      project: stringOrObjectId,
    }),
  ),
});

const ProjectGroupSchema = BaseModelSchema.merge(ProjectGroupDataSchema).merge(
  z.object({
    projects: z.union([
      z.array(z.object({ project: stringOrObjectId })),
      z.array(
        z.object({
          project: ProjectSchema,
        }),
      ),
    ]),
  }),
);

const CreateProjectGroupDTOSchema = ProjectGroupDataSchema.omit({
  hasLogo: true,
}).merge(
  z.object({
    users: z.array(z.string()).optional(),
  }),
);

const UpdateProjectGroupDTOSchema = ProjectGroupDataSchema.omit({ hasLogo: true })
  .merge(z.object({ external_id: z.any().optional(), users: z.array(z.string()).optional() }))
  .partial();

type ProjectGroup = z.infer<typeof ProjectGroupSchema>;
type CreateProjectGroupDTO = z.infer<typeof CreateProjectGroupDTOSchema>;
type UpdateProjectGroupDTO = z.infer<typeof UpdateProjectGroupDTOSchema>;

export {
  ProjectGroupSchema,
  ProjectGroup,
  CreateProjectGroupDTOSchema,
  CreateProjectGroupDTO,
  UpdateProjectGroupDTOSchema,
  UpdateProjectGroupDTO,
};
