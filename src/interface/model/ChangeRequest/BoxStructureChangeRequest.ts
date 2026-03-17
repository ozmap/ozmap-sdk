import { z } from 'zod';
import { BaseChangeRequestCreateSchema, BaseChangeRequestSchema, changeRequestKind } from './ChangeRequest';
import { stringOrObjectId } from '../BaseModel';
import { ChangeTopologyActionSchema } from './ChangeTopologyActions';
import { TopologyCablesSchema } from '../BoxStructure/TopologyCables';
import { TopologySchema } from '../BoxStructure/Topology';
import { BoxDesignSchema } from '../BoxStructure/BoxDesign';

const BoxStructureElementKind = z.enum(['box', 'building']);

const TopologyCablesWithOptionalCableTypeSchema = TopologyCablesSchema.extend({
  cableType: stringOrObjectId.optional(),
});

const CustomTopologySchema = TopologySchema.extend({
  cables: z.record(TopologyCablesWithOptionalCableTypeSchema).optional(),
});

const CustomBoxStructureSchema = z.object({
  topology: CustomTopologySchema,
  design: BoxDesignSchema,
});

const BoxStructureChangeRequestDataSchema = z.object({
  kind: z.literal(changeRequestKind.BoxStructure).optional().default(changeRequestKind.BoxStructure),
  element: z.object({
    id: stringOrObjectId,
    kind: BoxStructureElementKind,
  }),
  structure: CustomBoxStructureSchema,
  actions: z.array(ChangeTopologyActionSchema).default([]),
  isStructureEmpty: z.boolean().optional().default(false),
});

const BoxStructureChangeRequestSchema = BaseChangeRequestSchema.merge(BoxStructureChangeRequestDataSchema);

const CreateBoxStructureChangeRequestDTOSchema = BaseChangeRequestCreateSchema.merge(
  BoxStructureChangeRequestDataSchema,
);

type BoxStructureChangeRequest = z.infer<typeof BoxStructureChangeRequestSchema>;
type CreateBoxStructureChangeRequestDTO = z.infer<typeof CreateBoxStructureChangeRequestDTOSchema>;

export {
  BoxStructureElementKind,
  BoxStructureChangeRequestDataSchema,
  BoxStructureChangeRequestSchema,
  CreateBoxStructureChangeRequestDTOSchema,
  BoxStructureChangeRequest,
  CreateBoxStructureChangeRequestDTO,
};
