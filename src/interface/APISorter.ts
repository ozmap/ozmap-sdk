import { z } from 'zod';

enum ApiSortDirection {
  ASC = 1,
  DESC = -1,
}

const ApiSortSchema = z.object({
  property: z.string(),
  direction: z.nativeEnum(ApiSortDirection),
});

const ApiSortListSchema = z.array(ApiSortSchema).nullish();

type ApiSort = z.infer<typeof ApiSortSchema>;

export { ApiSortListSchema as ApiSortSchema, ApiSort, ApiSortDirection };
