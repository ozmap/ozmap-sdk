import { z } from 'zod';
import { BaseChangeRequestCreateSchema, BaseChangeRequestSchema, changeRequestKind } from './ChangeRequest';
import { stringOrObjectId } from '../BaseModel';
import { BoxStructureChangeRequestDataSchema } from './BoxStructureChangeRequest';
import { CreateBoxDTOSchema } from '../Box';

const BoxDataSchema = z.object({
  boxType: stringOrObjectId,
  project: stringOrObjectId,
  coords: z.tuple([z.number(), z.number()]),
  name: z.string().optional(),
  hierarchyLevel: z.number().min(2),
});

const BoxDataCreateSchema = BoxDataSchema.omit({ hierarchyLevel: true }).extend({
  hierarchyLevel: z.number().min(2).optional(),
});

const BoxCreateRequestDataSchema = BoxStructureChangeRequestDataSchema.extend({
  kind: z.literal(changeRequestKind.BoxCreate).optional().default(changeRequestKind.BoxCreate),
  element: z
    .object({
      id: stringOrObjectId.optional(),
      kind: z.literal('box').optional().default('box'),
    })
    .optional(),
  boxData: BoxDataSchema,
  structure: BoxStructureChangeRequestDataSchema.shape.structure.optional(),
});

const BoxCreateRequestSchema = BaseChangeRequestSchema.merge(BoxCreateRequestDataSchema);

const CreateBoxCreateRequestDTOSchema = BaseChangeRequestCreateSchema.merge(BoxCreateRequestDataSchema)
  .omit({ element: true, boxData: true })
  .extend({
    boxData: BoxDataCreateSchema,
  });

const BoxCreateRequestApproveSchema = z.object({
  observation: z.string().optional(),
  boxData: CreateBoxDTOSchema.partial().optional(),
});

const BoxCreateRequestRejectSchema = z.object({
  observation: z.string().nonempty(),
});

type BoxCreateRequestBoxData = z.infer<typeof BoxDataSchema>;
type BoxCreateRequest = z.infer<typeof BoxCreateRequestSchema>;
type CreateBoxCreateRequestDTO = z.infer<typeof CreateBoxCreateRequestDTOSchema>;
type BoxCreateRequestApprove = z.infer<typeof BoxCreateRequestApproveSchema>;
type BoxCreateRequestReject = z.infer<typeof BoxCreateRequestRejectSchema>;

export {
  BoxDataSchema,
  BoxDataCreateSchema,
  BoxCreateRequestDataSchema,
  BoxCreateRequestSchema,
  CreateBoxCreateRequestDTOSchema,
  BoxCreateRequestApproveSchema,
  BoxCreateRequestRejectSchema,
  BoxCreateRequestBoxData,
  BoxCreateRequest,
  CreateBoxCreateRequestDTO,
  BoxCreateRequestApprove,
  BoxCreateRequestReject,
};
