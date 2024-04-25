import { z } from 'zod';

enum ApiSortDirection {
  ASC = 1,
  DESC = -1,
}

const ApiSortSchema = z
  .object({
    property: z.string(),
    direction: z.nativeEnum(ApiSortDirection),
  })
  .nullish();

type ApiSort = z.infer<typeof ApiSortSchema>;

export { ApiSortSchema, ApiSort, ApiSortDirection };
