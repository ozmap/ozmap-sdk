import { z } from 'zod';
import { stringOrObjectId } from '../BaseModel';

const ElementKindsWithoutSide = ['Cable', 'Drop', 'Switch', 'Fusion', 'Connector', 'Passing', 'Cord', 'Fiber'] as const;
const ElementKindsWithSide = ['Splitter', 'DIO'] as const;
const ConnectorSides = ['input', 'output'] as const;

const ChangeTopologyAction = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  CREATE: 'create',
  DELETE: 'delete',
  UPDATE: 'update',
} as const;

const ElementKindWithoutSideSchema = z.enum(ElementKindsWithoutSide);
const ElementKindWithSideSchema = z.enum(ElementKindsWithSide);
const ElementKindSchema = z.union([ElementKindWithoutSideSchema, ElementKindWithSideSchema]);
const ConnectorSideSchema = z.enum(ConnectorSides);

const ElementIdentifierSchema = z.object({
  element: stringOrObjectId,
  identifier: z.string(),
  kind: ElementKindSchema,
});

const ConnectionElementWithoutSideSchema = ElementIdentifierSchema.extend({
  kind: ElementKindWithoutSideSchema,
  port: z.coerce.number(),
});

const ConnectionElementWithSideSchema = ConnectionElementWithoutSideSchema.extend({
  kind: ElementKindWithSideSchema,
  side: ConnectorSideSchema,
});

const ConnectionElementSchema = z.discriminatedUnion('kind', [
  ConnectionElementWithoutSideSchema,
  ConnectionElementWithSideSchema,
]);

const ConnectionDataSchema = z.object({
  elementA: ConnectionElementSchema,
  elementB: ConnectionElementSchema,
});

const PropertyValueSchema = z.object({
  value: z.union([z.string(), z.number()]),
  identifier: z.string().optional(),
});

const UpdateElementPropertySchema = ElementIdentifierSchema.extend({
  property: z.string(),
  newValue: PropertyValueSchema,
  oldValue: PropertyValueSchema,
});

const ConnectDisconnectActionSchema = z.object({
  action: z.enum([ChangeTopologyAction.CONNECT, ChangeTopologyAction.DISCONNECT]),
  data: ConnectionDataSchema,
});

const CreateElementActionSchema = z.object({
  action: z.literal(ChangeTopologyAction.CREATE),
  data: ElementIdentifierSchema,
});

const DeleteElementActionSchema = z.object({
  action: z.literal(ChangeTopologyAction.DELETE),
  data: ElementIdentifierSchema,
});

const UpdateElementActionSchema = z.object({
  action: z.literal(ChangeTopologyAction.UPDATE),
  data: UpdateElementPropertySchema,
});

const ChangeTopologyActionSchema = z.discriminatedUnion('action', [
  ConnectDisconnectActionSchema,
  CreateElementActionSchema,
  DeleteElementActionSchema,
  UpdateElementActionSchema,
]);

type ChangeTopologyActionType = z.infer<typeof ChangeTopologyActionSchema>;
type ConnectionAction = z.infer<typeof ConnectDisconnectActionSchema>;
type ConnectionElement = z.infer<typeof ConnectionElementSchema>;
type ConnectionElementWithoutSide = z.infer<typeof ConnectionElementWithoutSideSchema>;
type ConnectionElementWithSide = z.infer<typeof ConnectionElementWithSideSchema>;
type ConnectionData = z.infer<typeof ConnectionDataSchema>;
type PropertyValue = z.infer<typeof PropertyValueSchema>;
type CreateElementAction = z.infer<typeof CreateElementActionSchema>;
type DeleteElementAction = z.infer<typeof DeleteElementActionSchema>;
type UpdateElementAction = z.infer<typeof UpdateElementActionSchema>;
type ElementIdentifier = z.infer<typeof ElementIdentifierSchema>;

export {
  ChangeTopologyAction,
  ElementKindsWithoutSide,
  ElementKindsWithSide,
  ConnectorSides,
  ChangeTopologyActionSchema,
  ChangeTopologyActionType,
  ConnectionAction,
  ConnectionElement,
  ConnectionElementWithoutSide,
  ConnectionElementWithSide,
  ConnectionData,
  PropertyValue,
  CreateElementAction,
  DeleteElementAction,
  UpdateElementAction,
  ElementIdentifierSchema,
  ElementIdentifier,
  PropertyValueSchema,
  UpdateElementPropertySchema,
};
