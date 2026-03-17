import { z } from 'zod';
import { stringOrObjectId } from '../BaseModel';
import { PostItPositionsSchema } from './Postit';
import { ConnectablePositionsSchema, ElementPositionsSchema } from './Positions';

const DesignPositionsSchema = z.object({
  cables: ElementPositionsSchema.optional(),
  connectors: ElementPositionsSchema.optional(),
  dios: ElementPositionsSchema.optional(),
  drops: ElementPositionsSchema.optional(),
  fusions: ElementPositionsSchema.optional(),
  splitters: ElementPositionsSchema.optional(),
  switches: ElementPositionsSchema.optional(),
  fibers: ConnectablePositionsSchema.optional(),
  cords: ConnectablePositionsSchema.optional(),
  passings: ConnectablePositionsSchema.optional(),
  postits: PostItPositionsSchema.optional(),
  children: z.array(z.record(z.unknown())).optional(),
});

const BoxDesignSchema = z.object({
  id: z.string().nullable().optional(),
  box: stringOrObjectId.optional(),
  project: stringOrObjectId.optional(),
  isTemplate: z.boolean().optional(),
  template: z.string().nullable().optional(),
  positions: DesignPositionsSchema.optional(),
});

type DesignPositions = z.infer<typeof DesignPositionsSchema>;
type BoxDesign = z.infer<typeof BoxDesignSchema>;

export { DesignPositionsSchema, DesignPositions, BoxDesignSchema, BoxDesign };
