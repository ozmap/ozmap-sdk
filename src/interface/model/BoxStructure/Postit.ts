import { z } from 'zod';
import { SimplePointSchema } from './Positions';

const PostItPropsSchema = z.object({
  id: z.string(),
  bgcolor: z.string(),
  bordercolor: z.string(),
  owner: z.string(),
  project: z.string(),
  text: z.string(),
  width: z.number(),
  height: z.number(),
  createdAt: z.string(),
});

const PostItPositionsSchema = z.array(
  SimplePointSchema.extend({
    config: PostItPropsSchema,
  }),
);

type PostItProps = z.infer<typeof PostItPropsSchema>;
type PostItPositions = z.infer<typeof PostItPositionsSchema>;

export { PostItPropsSchema, PostItProps, PostItPositionsSchema, PostItPositions };
