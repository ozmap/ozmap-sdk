import { z } from 'zod';

const SplitterPortSchema = z.object({
  id: z.string(),
  index: z.number(),
  blocked: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  observation: z.string().optional(),
});

const BaseConnectorConnectables = z.array(z.string().nullable());

const TopologyBaseConnectorSchema = z.object({
  id: z.string(),
  name: z.string(),
  isDrop: z.boolean(),
  implanted: z.boolean(),
  connectorType: z.string().optional(),
  observation: z.string().optional(),
});

const TopologyConnectorsSchema = TopologyBaseConnectorSchema.extend({
  connectables: BaseConnectorConnectables,
});

const TopologyIOConnectorSchema = TopologyBaseConnectorSchema.extend({
  connectables: z.object({
    input: BaseConnectorConnectables,
    output: BaseConnectorConnectables,
  }),
});

const TopologySplitterSchema = TopologyIOConnectorSchema.extend({
  ports: z.array(SplitterPortSchema),
  isBalanced: z.boolean(),
  orientation: z.string(),
  mostAttenuatedPort: z.number(),
  inputConnectionType: z.number(),
  outputConnectionType: z.number(),
  code: z.string(),
});

const TopologyDIOSchema = TopologyIOConnectorSchema.extend({
  tray_number: z.number().optional(),
  input_label: z.array(z.string()).optional(),
  output_label: z.array(z.string()).optional(),
});

const TopologyPassingSchema = z.object({
  id: z.string(),
  connectables: BaseConnectorConnectables,
});

type TopologyBaseConnector = z.infer<typeof TopologyBaseConnectorSchema>;
type TopologyConnectors = z.infer<typeof TopologyConnectorsSchema>;
type TopologyIOConnector = z.infer<typeof TopologyIOConnectorSchema>;
type TopologySplitter = z.infer<typeof TopologySplitterSchema>;
type TopologyDIO = z.infer<typeof TopologyDIOSchema>;
type TopologyPassing = z.infer<typeof TopologyPassingSchema>;

export {
  SplitterPortSchema,
  TopologyBaseConnectorSchema,
  TopologyBaseConnector,
  TopologyConnectorsSchema,
  TopologyConnectors,
  TopologyIOConnectorSchema,
  TopologyIOConnector,
  TopologySplitterSchema,
  TopologySplitter,
  TopologyDIOSchema,
  TopologyDIO,
  TopologyPassingSchema,
  TopologyPassing,
};
