import { z } from 'zod';
import { stringOrObjectId } from '../BaseModel';
import { PostItPositionsSchema } from './Postit';
import { ConnectablePositionsSchema, ElementPositionsSchema } from './Positions';

const DesignPositionsSchema = z
  .object({
    cables: ElementPositionsSchema,
    connectors: ElementPositionsSchema,
    dios: ElementPositionsSchema,
    drops: ElementPositionsSchema,
    fusions: ElementPositionsSchema,
    splitters: ElementPositionsSchema,
    switches: ElementPositionsSchema,
    fibers: ConnectablePositionsSchema,
    cords: ConnectablePositionsSchema,
    passings: ConnectablePositionsSchema,
    postits: PostItPositionsSchema,
    children: z.array(z.record(z.unknown())),
  })
  .partial();

const BoxDesignSchema = z
  .object({
    id: z.string().nullable(),
    box: stringOrObjectId,
    project: stringOrObjectId,
    isTemplate: z.boolean(),
    template: z.string().nullable(),
    positions: DesignPositionsSchema,
  })
  .partial();

type DesignPositions = z.infer<typeof DesignPositionsSchema>;
type BoxDesign = z.infer<typeof BoxDesignSchema>;

export { DesignPositionsSchema, DesignPositions, BoxDesignSchema, BoxDesign };
