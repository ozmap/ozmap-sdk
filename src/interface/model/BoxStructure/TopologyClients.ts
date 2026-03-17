import { z } from 'zod';

const TopologyClientsSchema = z.object({
  _id: z.string().optional(),
  certified: z.boolean(),
  implanted: z.boolean(),
  status: z.number(),
  observation: z.string().optional(),
  kind: z.string(),
  code: z.string(),
  name: z.string().nullish(),
});

type TopologyClients = z.infer<typeof TopologyClientsSchema>;

export { TopologyClientsSchema, TopologyClients };
