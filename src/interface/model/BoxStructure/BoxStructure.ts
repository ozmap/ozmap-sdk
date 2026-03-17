import { z } from 'zod';
import { BoxDesignSchema } from './BoxDesign';
import { TopologySchema } from './Topology';

const BoxStructureSchema = z.object({
  topology: TopologySchema,
  design: BoxDesignSchema,
});

type BoxStructure = z.infer<typeof BoxStructureSchema>;

export { BoxStructureSchema, BoxStructure };
