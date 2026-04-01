import { z } from 'zod';
import {
  TopologyConnectorsSchema,
  TopologySplitterSchema,
  TopologyDIOSchema,
  TopologyPassingSchema,
} from './TopologyConnectors';
import { TopologyCablesSchema, TopologyDropsSchema } from './TopologyCables';

const TopologyCordItemSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  connectors: z.array(z.string().nullable()),
  observation: z.string().optional(),
});

const TopologyCordsSchema = z.record(TopologyCordItemSchema);

const TopologySchema = z.object({
  box: z.string().optional(),
  project: z.string().optional(),
  id: z.string().optional(),
  cables: z.record(TopologyCablesSchema).optional(),
  drops: z.record(TopologyDropsSchema).optional(),
  switches: z.record(TopologyConnectorsSchema).optional(),
  connectors: z.record(TopologyConnectorsSchema).optional(),
  splitters: z.record(TopologySplitterSchema).optional(),
  passings: z.record(TopologyPassingSchema).optional(),
  fusions: z.record(TopologyConnectorsSchema).optional(),
  dios: z.record(TopologyDIOSchema).optional(),
  cords: TopologyCordsSchema.optional(),
  extraData: z.any().optional(),
  checksum: z.string().optional(),
});

type TopologyCordItem = z.infer<typeof TopologyCordItemSchema>;
type TopologyCords = z.infer<typeof TopologyCordsSchema>;
type Topology = z.infer<typeof TopologySchema>;

export { TopologyCordItemSchema, TopologyCordItem, TopologyCordsSchema, TopologyCords, TopologySchema, Topology };
