import { z } from 'zod';
import { TopologyClientsSchema } from './TopologyClients';
import { stringOrObjectId } from '../BaseModel';

const TopologyCablesSchema = z.object({
  id: z.string(),
  name: z.string(),
  looseNumber: z.number(),
  orientation: z.string(),
  observation: z.string().optional(),
  implanted: z.boolean(),
  fibersColourMap: z.array(z.string()),
  groupsColourMap: z.array(z.string()),
  defaultFiberColor: z.string(),
  defaultTubeColor: z.string(),
  fibers: z.array(z.string()),
  project: z.string(),
  cableType: stringOrObjectId.optional(),
});

const SignalWay = z.enum(['in', 'out']);

const ExtraFiberDataSchema = z.object({
  name: z.string(),
  potency: z.number().optional().nullable(),
  split: z.number().optional().nullable(),
  way: SignalWay.optional().nullable(),
});

const TopologyDropsSchema = TopologyCablesSchema.extend({
  propertyData: z.object({
    address: z.string().nullish(),
    coords: z.tuple([z.number(), z.number()]).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    id: z.string(),
    observation: z.string(),
    client: TopologyClientsSchema.nullish(),
  }),
});

type TopologyCables = z.infer<typeof TopologyCablesSchema>;
type ExtraFiberData = z.infer<typeof ExtraFiberDataSchema>;
type TopologyDrops = z.infer<typeof TopologyDropsSchema>;

export {
  TopologyCablesSchema,
  TopologyCables,
  ExtraFiberDataSchema,
  ExtraFiberData,
  TopologyDropsSchema,
  TopologyDrops,
};
