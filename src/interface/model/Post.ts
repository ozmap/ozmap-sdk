import { z } from 'zod';
import { BaseModelSchema, externalId, stringOrObjectId } from './BaseModel';

const PostDataSchema = z.object({
  element: z.object({
    id: stringOrObjectId,
    kind: z.enum([
      'property',
      'box',
      'building',
      'cable',
      'drop',
      'networkConnector',
      'pole',
      'pendency',
      'junctionBox',
      'duct',
    ]),
  }),
  owner: stringOrObjectId,
  tags: z.array(stringOrObjectId).nullish(),
  title: z.string().trim().nullish(),
  observation: z.string().trim().nullish(),
  files: z.array(z.string()).default([]),
});

const PostSchema = BaseModelSchema.merge(PostDataSchema);
const CreatePostDTOSchema = PostDataSchema.merge(z.object({ external_id: externalId })).partial({
  files: true,
  owner: true,
});
const UpdatePostDTOSchema = PostDataSchema.merge(z.object({ external_id: externalId }))
  .omit({ files: true, owner: true, element: true })
  .partial();

type Post = z.infer<typeof PostSchema>;
type CreatePostDTO = z.infer<typeof CreatePostDTOSchema>;
type UpdatePostDTO = z.infer<typeof UpdatePostDTOSchema>;

export { PostSchema, Post, CreatePostDTOSchema, CreatePostDTO, UpdatePostDTOSchema, UpdatePostDTO };
