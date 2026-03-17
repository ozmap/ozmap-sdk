import { z } from 'zod';

// --- Sub-report element schemas ---

const ReportPointSchema = z.object({
  _id: z.string().optional(),
  id: z.string().optional(),
  lat: z.number(),
  lng: z.number(),
  reserve: z.number().optional(),
  coords: z.array(z.number()).optional(),
});

const ReportCableSchema = z.object({
  id: z.string(),
  tags: z.array(z.string()),
  name: z.string(),
  observation: z.string(),
  level: z.string(),
  cableType: z.string(),
  implanted: z.boolean(),
  boxA: z.string(),
  boxB: z.string(),
  color: z.string(),
  project: z.string(),
  length: z.number(),
  altitude_length: z.number(),
  ground_length: z.number(),
  poles: z.array(ReportPointSchema),
  positions: z
    .array(
      z.object({
        lat: z.number(),
        lng: z.number(),
        advancedLat: z.number().optional(),
        advancedLng: z.number().optional(),
      }),
    )
    .optional(),
  createdAt: z.coerce.date(),
  posts: z.number(),
  ducts: z.array(z.string()),
  openPendencies: z.number(),
});

const ReportPoleSchema = z.object({
  cables: z.union([z.array(z.string()), z.string()]),
  id: z.string(),
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
  createdAt: z.coerce.date(),
  tags: z.array(z.string()),
  posts: z.number(),
  sumReserves: z.number(),
  used: z.boolean(),
  licensing_protocol: z.string(),
  licensing_status: z.number(),
  poleType: z.string(),
  observation: z.string(),
  color: z.string(),
  address: z.string(),
  openPendencies: z.number(),
});

const ReportBoxSchema = z.object({
  id: z.string(),
  name: z.string(),
  pole: z.string(),
  observation: z.string(),
  boxType: z.string(),
  level: z.string(),
  project: z.string(),
  implanted: z.boolean(),
  certified: z.boolean(),
  draft: z.boolean(),
  connectors: z
    .array(
      z.object({
        name: z.string(),
        level: z.string(),
        clients: z.number(),
      }),
    )
    .optional(),
  clients: z.number(),
  createdAt: z.coerce.date(),
  shared: z.boolean(),
  tags: z.array(z.string()),
  posts: z.number(),
  default_reserve: z.number(),
  color: z.string(),
  fill_color: z.string(),
  address: z.string(),
  capacity: z.number(),
  busyDoors: z.number(),
  availableDoors: z.number(),
  lat: z.number(),
  lng: z.number(),
  openPendencies: z.number(),
});

const ReportPopSchema = z.object({
  id: z.string(),
  name: z.string(),
  pole: z.string(),
  type: z.string(),
  level: z.string(),
  observation: z.string(),
  project: z.string(),
  implanted: z.boolean(),
  certified: z.boolean(),
  draft: z.boolean(),
  lat: z.number(),
  lng: z.number(),
  connectors: z
    .array(
      z.object({
        name: z.string(),
        level: z.string(),
      }),
    )
    .optional(),
  createdAt: z.coerce.date(),
  shared: z.boolean(),
  address: z.string(),
  tags: z.array(z.string()),
  posts: z.number(),
  openPendencies: z.number(),
});

const ReportShelfSchema = z.object({
  id: z.string(),
  name: z.string(),
  us: z.number(),
  project: z.string(),
  createdAt: z.coerce.date(),
  parent: z.object({
    _id: z.string(),
    name: z.string(),
  }),
  shelfType: z.string(),
  equipmentsCount: z.number(),
  equipmentsSize: z.number(),
  size: z.number(),
  tags: z.array(z.string()),
});

const ReportSectorSchema = z.object({
  id: z.string(),
  name: z.string(),
  pop: z.string(),
  tower: z.string(),
  project: z.string(),
  antenna: z.string(),
  link: z.string(),
  createdAt: z.coerce.date(),
  tags: z.array(z.string()),
});

const ReportBaseClientSchema = z.object({
  box: z.string(),
  property_observation: z.string(),
  property_tags: z.array(z.string()),
  pole: z.string(),
  project: z.string(),
  drop_length: z.union([z.string(), z.number()]),
  address: z.string(),
  coords: z.tuple([z.number(), z.number()]),
  olt: z.string().nullable(),
  slot: z.string().nullable(),
  pon: z.string().nullable(),
  potencyRead: z.number().optional(),
  connector: z.string().optional(),
  port: z.number().optional(),
});

const ReportPropertySchema = ReportBaseClientSchema.extend({
  id: z.string(),
  createdAt: z.coerce.date(),
  posts: z.number(),
  openPendencies: z.number(),
});

const ReportClientSchema = ReportBaseClientSchema.extend({
  id: z.string(),
  kind: z.string(),
  name: z.string(),
  certified: z.string(),
  property: z.string(),
  code: z.string(),
  client_observation: z.string(),
  implanted: z.boolean(),
  status: z.number(),
  createdAt: z.coerce.date(),
  onu: z.object({}).passthrough(),
  tags: z.array(z.string()),
  posts: z.number(),
  openPendencies: z.number(),
});

const ReportBuildingSchema = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  properties: z.number(),
  clients: z.number(),
  createdAt: z.coerce.date(),
  tags: z.array(z.string()),
  posts: z.number(),
  implanted: z.boolean(),
  observation: z.string(),
  buildingTypeName: z.string().optional(),
  color: z.string().optional(),
  buildingType: z.string(),
  openPendencies: z.number(),
});

const ReportPendencySchema = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(z.string()),
  solved: z.boolean(),
  owner: z.string(),
  description: z.string(),
  pendencyType: z.string(),
  responsibles: z.array(z.string()).optional(),
  linkedElement: z.object({}).passthrough().nullable(),
  populatedLinkedElement: z.object({ name: z.string().optional() }).nullable(),
  color: z.string(),
  project: z.string(),
  lat: z.number(),
  lng: z.number(),
  createdAt: z.coerce.date().optional(),
  posts: z.number(),
});

const ReportRegionSchema = z.object({
  id: z.string(),
  name: z.string(),
  observation: z.string(),
  regionType: z.string(),
  color: z.string(),
  borderColor: z.string(),
  tags: z.array(z.string()),
  polygon: z.object({
    type: z.enum(['Polygon']),
    coordinates: z.array(z.array(z.array(z.number()))),
  }),
  projects: z.array(z.string()),
  createdAt: z.coerce.date(),
  posts: z.number(),
});

const ReportProspectSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  tags: z.array(z.string()),
  address: z.string(),
  createdAt: z.coerce.date(),
  observation: z.string(),
  lat: z.number(),
  lng: z.number(),
});

const ReportJunctionBoxSchema = z.object({
  id: z.string(),
  name: z.string(),
  posts: z.number(),
  tags: z.array(z.any()),
  junctionBoxType: z.string().optional(),
  color: z.string().optional(),
  address: z.string().optional(),
  observation: z.string().optional(),
  junctionBoxTypeName: z.string().optional(),
  createdAt: z.coerce.date(),
  lat: z.number(),
  lng: z.number(),
  implanted: z.boolean(),
  boxes: z.number(),
  project: z.string(),
  coords: z.tuple([z.number(), z.number()]).optional(),
  _id: z.string().optional(),
  openPendencies: z.number(),
});

const ReportDuctSchema = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(z.any()),
  posts: z.number(),
  createdAt: z.coerce.date(),
  observation: z.string().optional(),
  implanted: z.boolean().optional(),
  subDucts: z.number(),
  cables: z.number(),
  color: z.string().optional(),
  edgeA: z.string(),
  edgeB: z.string(),
  ductType: z.string(),
  length: z.number().optional(),
  project: z.string().optional(),
  openPendencies: z.number(),
});

const ReportReserveSchema = z.object({
  cable: z.string(),
  lat: z.number(),
  lng: z.number(),
  reserve: z.number(),
  project: z.string(),
});

const ReportTowerSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  towerType: z.string(),
  towerTypeCode: z.string().optional(),
  parent: z.string().optional(),
  parentName: z.string().optional(),
  hierarchyLevelName: z.string().optional(),
  lat: z.number().optional(),
  lng: z.number().optional(),
  coords: z.array(z.number()).optional(),
  posts: z.number().optional(),
});

const ConnectorAttenuationSchema = z.object({
  id: z.string(),
  name: z.string(),
  kind: z.string(),
  isBalanced: z.boolean(),
  parent: z.string(),
  project: z.string(),
  implanted: z.boolean(),
  parentName: z.string(),
  isDrop: z.boolean(),
  observation: z.string(),
  connectorType: z.string(),
  connectorTypeCode: z.string(),
  input: z.number(),
  availability: z.number(),
  total: z.number(),
  mostAttenuatedPort: z.number(),
  min_potency: z.number(),
  max_potency: z.number(),
  createdAt: z.coerce.date(),
});

const PopConnectorAttenuationSchema = z.object({
  id: z.string(),
  name: z.string(),
  kind: z.string(),
  parent: z.string(),
  parentName: z.string(),
  project: z.string(),
  implanted: z.boolean(),
  isDrop: z.boolean(),
  observation: z.string(),
  connectorType: z.string(),
  connectorTypeCode: z.string(),
  input: z.number(),
  total: z.number(),
  createdAt: z.coerce.date(),
  size: z.string().optional(),
  fabricationDate: z.coerce.date().optional(),
  radioCapacity: z.string().optional(),
  potency: z.number().optional(),
  autonomy: z.string().optional(),
  serialNumber: z.string().optional(),
  shelf: z.string().optional(),
  tags: z.array(z.string()).optional(),
  posts: z.number().optional(),
});

const ReportConnectorSchema = z.union([ConnectorAttenuationSchema, PopConnectorAttenuationSchema]);

const PolygonReportDataSchema = z.object({
  boxes: z.array(ReportBoxSchema),
  reserves: z.array(ReportReserveSchema),
  pops: z.array(ReportPopSchema),
  shelfs: z.array(ReportShelfSchema),
  sectors: z.array(ReportSectorSchema),
  buildings: z.array(ReportBuildingSchema),
  poles: z.array(ReportPoleSchema),
  properties: z.array(ReportPropertySchema),
  points: z.array(ReportPointSchema).optional(),
  prospects: z.array(ReportProspectSchema),
  cables: z.array(ReportCableSchema),
  clients: z.array(ReportClientSchema),
  junctionBoxes: z.array(ReportJunctionBoxSchema),
  ducts: z.array(ReportDuctSchema),
  splitters: z.array(ReportConnectorSchema),
  pendencies: z.array(ReportPendencySchema),
  regions: z.array(ReportRegionSchema),
  towers: z.array(ReportTowerSchema),
  errors: z.array(z.any()),
});

type PolygonReportData = z.infer<typeof PolygonReportDataSchema>;

export {
  PolygonReportDataSchema,
  PolygonReportData,
  ReportCableSchema,
  ReportPoleSchema,
  ReportBoxSchema,
  ReportPopSchema,
  ReportShelfSchema,
  ReportSectorSchema,
  ReportPropertySchema,
  ReportClientSchema,
  ReportBuildingSchema,
  ReportPendencySchema,
  ReportRegionSchema,
  ReportProspectSchema,
  ReportJunctionBoxSchema,
  ReportDuctSchema,
  ReportReserveSchema,
  ReportTowerSchema,
  ConnectorAttenuationSchema,
  PopConnectorAttenuationSchema,
  ReportConnectorSchema,
  ReportPointSchema,
};
