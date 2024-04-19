import ObjectId from 'bson-objectid';
import { z } from 'zod';

const stringOrObjectId = z.string().or(z.instanceof(ObjectId, { message: 'NOT_OBJECT_ID' }));

const BaseModelSchema = z.object({
  _id: stringOrObjectId.optional(),
  id: stringOrObjectId,
  external_id: z.string().optional(),
  creatorData: z
    .object({
      id: stringOrObjectId,
      name: z.string(),
      username: z.string(),
    })
    .optional(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().optional(),
});

type BaseModel = z.infer<typeof BaseModelSchema>;

export { BaseModelSchema, BaseModel, stringOrObjectId };
