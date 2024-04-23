import { z } from 'zod';
import { stringOrObjectId, BaseModelSchema } from './BaseModel';

const ProjectDataSchema = z.object({
  name: z.string().trim(),
  identifier: z.string().trim().optional(),
  parents: z
    .array(
      z.object({
        project: stringOrObjectId,
      }),
    )
    .default([]),
  lat: z.number().default(0),
  lng: z.number().default(0),
  defaultPonPotency: z.number(),
  defaultDropSize: z.number().optional(),
  hasLogo: z.boolean().default(false),
  drop: z.object({
    type: z.object({
      cableType: stringOrObjectId,
    }),
    maxSize: z.number(),
  }),
  area: z.object({
    type: z.literal('Polygon'),
    coordinates: z.array(z.array(z.array(z.number()))),
  }),
});

const ProjectSchema = BaseModelSchema.merge(ProjectDataSchema);
const CreateProjectDTOSchema = ProjectSchema.omit({ hasLogo: true })
  .partial({ drop: true, defaultPonPotency: true })
  .merge(z.object({}));
const UpdateProjectDTOSchema = ProjectSchema.omit({ defaultDropSize: true, hasLogo: true }).partial();

type Project = z.infer<typeof ProjectSchema>;
type CreateProjectDTO = z.infer<typeof CreateProjectDTOSchema>;
type UpdateProjectDTO = z.infer<typeof UpdateProjectDTOSchema>;

export { ProjectSchema, Project, CreateProjectDTOSchema, CreateProjectDTO, UpdateProjectDTOSchema, UpdateProjectDTO };
