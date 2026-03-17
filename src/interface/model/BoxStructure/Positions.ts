import { z } from 'zod';

const Orientations = ['top', 'bottom', 'left', 'right'] as const;

const OrientationSchema = z.enum(Orientations);

const LabelSchema = z.object({
  position: z.object({
    offset: z.number(),
    distance: z.number(),
  }),
});

const SimplePointSchema = z.object({
  x: z.number(),
  y: z.number(),
});

const OrientedPositionSchema = SimplePointSchema.extend({
  orientation: OrientationSchema.optional(),
});

const ComposedPositionSchema = z.object({
  vertices: z.array(SimplePointSchema),
  labels: z.array(LabelSchema).optional(),
});

const ElementPositionsSchema = z.record(SimplePointSchema);
const ConnectablePositionsSchema = z.record(ComposedPositionSchema);

type Orientation = z.infer<typeof OrientationSchema>;
type Label = z.infer<typeof LabelSchema>;
type SimplePoint = z.infer<typeof SimplePointSchema>;
type OrientedPosition = z.infer<typeof OrientedPositionSchema>;
type ComposedPosition = z.infer<typeof ComposedPositionSchema>;
type ElementPositions = z.infer<typeof ElementPositionsSchema>;
type ConnectablePositions = z.infer<typeof ConnectablePositionsSchema>;

export {
  Orientations,
  OrientationSchema,
  Orientation,
  LabelSchema,
  Label,
  SimplePointSchema,
  SimplePoint,
  OrientedPositionSchema,
  OrientedPosition,
  ComposedPositionSchema,
  ComposedPosition,
  ElementPositionsSchema,
  ElementPositions,
  ConnectablePositionsSchema,
  ConnectablePositions,
};
