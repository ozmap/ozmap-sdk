import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from '../BaseModel';

const ChangeRequestKinds = ['BoxStructure', 'BoxCreate'] as const;
const ChangeRequestStatuses = ['pending', 'approved', 'rejected'] as const;

const ChangeRequestStatusSchema = z.enum(ChangeRequestStatuses);
const ChangeRequestKindSchema = z.enum(ChangeRequestKinds);

const changeRequestKind = ChangeRequestKindSchema.Enum;
const changeRequestStatus = ChangeRequestStatusSchema.Enum;

const MinimalUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
});

const ReviewSchema = z.object({
  by: MinimalUserSchema,
  at: z.date().or(z.string()),
});

const BaseChangeRequestDataSchema = z.object({
  kind: ChangeRequestKindSchema,
  status: ChangeRequestStatusSchema,
  element: z.object({
    id: stringOrObjectId,
    kind: z.string(),
  }),
  code: z.string(),
  applicable: z.boolean().optional(),
  createdBy: stringOrObjectId,
  review: ReviewSchema.optional(),
  observation: z.string().optional(),
  description: z.string().min(5),
});

const BaseChangeRequestCreateSchema = z.object({
  kind: ChangeRequestKindSchema,
  element: z.object({
    id: stringOrObjectId,
    kind: z.string(),
  }),
  description: z.string().min(5),
});

const BaseChangeRequestApproveSchema = z.object({
  elementId: stringOrObjectId,
  kind: ChangeRequestKindSchema,
  status: z.literal(changeRequestStatus.approved),
  observation: z.string().optional(),
});

const BaseChangeRequestRejectSchema = z.object({
  elementId: stringOrObjectId,
  kind: ChangeRequestKindSchema,
  status: z.literal(changeRequestStatus.rejected),
  observation: z.string(),
});

const BaseChangeRequestSchema = BaseModelSchema.merge(BaseChangeRequestDataSchema);

type ChangeRequestKind = z.infer<typeof ChangeRequestKindSchema>;
type ChangeRequestStatus = z.infer<typeof ChangeRequestStatusSchema>;
type BaseChangeRequest = z.infer<typeof BaseChangeRequestSchema>;
type CreateBaseChangeRequestDTO = z.infer<typeof BaseChangeRequestCreateSchema>;
type ApproveBaseChangeRequestDTO = z.infer<typeof BaseChangeRequestApproveSchema>;
type RejectBaseChangeRequestDTO = z.infer<typeof BaseChangeRequestRejectSchema>;

export {
  ChangeRequestKinds,
  ChangeRequestStatuses,
  ChangeRequestKindSchema,
  ChangeRequestStatusSchema,
  changeRequestKind,
  changeRequestStatus,
  MinimalUserSchema,
  ReviewSchema,
  BaseChangeRequestDataSchema,
  BaseChangeRequestCreateSchema,
  BaseChangeRequestApproveSchema,
  BaseChangeRequestRejectSchema,
  BaseChangeRequestSchema,
  ChangeRequestKind,
  ChangeRequestStatus,
  BaseChangeRequest,
  CreateBaseChangeRequestDTO,
  ApproveBaseChangeRequestDTO,
  RejectBaseChangeRequestDTO,
};
