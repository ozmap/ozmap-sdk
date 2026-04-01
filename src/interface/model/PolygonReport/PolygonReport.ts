import { z } from 'zod';
import { BaseModelSchema, stringOrObjectId } from '../BaseModel';
import { PolygonReportDataSchema } from './PolygonReportData';

const ReportErrorSchema = z.object({
  message: z.string(),
  element: z.string(),
});

const BoxesSummarySchema = z.object({
  id: z.string(),
  implanted: z.number(),
  not_implanted: z.number(),
  draft: z.number(),
  total: z.number(),
});

const CablesSummarySchema = z.object({
  id: z.string(),
  implanted: z.number(),
  not_implanted: z.number(),
  total: z.number(),
});

const ClientsSummarySchema = z.object({
  id: z.string(),
  implanted: z.number(),
  not_implanted: z.number(),
  total: z.number(),
});

const PropertiesSummarySchema = z.object({
  implanted: z.number(),
  total: z.number(),
});

const PolesSummarySchema = z.object({
  total: z.number(),
  used: z.number(),
  licensed: z.number(),
  licensing: z.number(),
  unknown: z.number(),
});

const PopsSummarySchema = z.object({
  id: z.string(),
  implanted: z.number(),
  not_implanted: z.number(),
  certified: z.number(),
  draft: z.number(),
  total: z.number(),
});

const PendencySummarySchema = z.object({
  id: z.string(),
  solved: z.number(),
  not_solved: z.number(),
  total: z.number(),
});

const ReportSummarySchema = z.object({
  id: z.string().optional(),
  boxes: z.array(BoxesSummarySchema),
  cables: z.array(CablesSummarySchema),
  clients: z.array(ClientsSummarySchema),
  properties: z.array(PropertiesSummarySchema),
  poles: z.array(PolesSummarySchema),
  pops: z.array(PopsSummarySchema),
  pendencies: PendencySummarySchema,
  splitters: z.array(z.object({}).passthrough()),
  buildings: z.array(
    z.object({
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
    }),
  ),
  errors: z.array(ReportErrorSchema),
});

const PolygonGeoJSONSchema = z.object({
  type: z.enum(['Polygon']),
  coordinates: z.array(z.array(z.array(z.number()))),
});

const PolygonReportDataFieldSchema = z.object({
  polygon: PolygonGeoJSONSchema,
  name: z.string().nullish(),
  project: stringOrObjectId,
  isGeneralReport: z.boolean().nullable(),
});

const PolygonReportSchema = BaseModelSchema.merge(PolygonReportDataFieldSchema).merge(
  z.object({
    date: z.coerce.date().optional(),
    data: z.union([PolygonReportDataSchema, ReportSummarySchema]).optional(),
  }),
);

const PolygonReportExtraKindReference = {
  GENERAL_TAB: 'generaltab',
  CABLE_GRID: 'cablegrid',
  BOX_GRID: 'boxgrid',
  POP_GRID: 'popgrid',
  SHELF_GRID: 'shelfgrid',
  SECTOR_GRID: 'sectorgrid',
  CLIENT_GRID: 'clientgrid',
  PROSPECT_GRID: 'prospectgrid',
  PROPERTY_GRID: 'propertygrid',
  BUILDING_GRID: 'buildinggrid',
  POLE_GRID: 'polegrid',
  SPLITTER_GRID: 'splittergrid',
  PENDENCY_GRID: 'pendencygrid',
  REGION_GRID: 'regiongrid',
  JUNCTION_BOX_GRID: 'junctionboxgrid',
  DUCT_GRID: 'ductgrid',
  TOWER_GRID: 'towergrid',
} as const;

type PolygonReportExtraKindReference =
  typeof PolygonReportExtraKindReference[keyof typeof PolygonReportExtraKindReference];

const PolygonReportExtraSchema = z.object({
  kind: z.string().optional(),
  force: z.boolean().optional(),
});

const CreatePolygonReportDTOSchema = z.object({
  _id: stringOrObjectId.nullish(),
  polygon: PolygonGeoJSONSchema,
  name: z.string().nullish(),
  project: stringOrObjectId.optional(),
  isGeneralReport: z.boolean().nullable().optional(),
  extra: PolygonReportExtraSchema.optional(),
});

type PolygonReport = z.infer<typeof PolygonReportSchema>;
type CreatePolygonReportDTO = z.infer<typeof CreatePolygonReportDTOSchema>;

const PolygonReportKind = {
  ALL: 'all',
  GENERAL: 'general',
  CABLES: 'cables',
  BOXES: 'boxes',
  POPS: 'pops',
  SHELFS: 'shelfs',
  SECTORS: 'sectors',
  CLIENTS: 'clients',
  PROSPECTS: 'prospects',
  PROPERTIES: 'properties',
  BUILDINGS: 'buildings',
  POLES: 'poles',
  SPLITTERS: 'splitters',
  PENDENCIES: 'pendencies',
  REGIONS: 'regions',
  JUNCTION_BOXES: 'junctionBoxes',
  DUCTS: 'ducts',
  TOWERS: 'torres',
} as const;

type PolygonReportKind = typeof PolygonReportKind[keyof typeof PolygonReportKind];

const MoveReportSchema = z.object({
  lat: z.number(),
  lng: z.number(),
});

const ReportTagsSchema = z.object({
  tags: z.array(z.string()),
});

const UpdateProjectSchema = z.object({
  project: stringOrObjectId,
  ids: z.array(stringOrObjectId),
});

const ElementsReportSchema = z.object({
  elements: z.object({
    cableIds: z.array(stringOrObjectId).optional(),
    boxIds: z.array(stringOrObjectId).optional(),
    popIds: z.array(stringOrObjectId).optional(),
    shelfIds: z.array(stringOrObjectId).optional(),
    sectorIds: z.array(stringOrObjectId).optional(),
    clientIds: z.array(stringOrObjectId).optional(),
    prospectIds: z.array(stringOrObjectId).optional(),
    propertyIds: z.array(stringOrObjectId).optional(),
    buildingIds: z.array(stringOrObjectId).optional(),
    poleIds: z.array(stringOrObjectId).optional(),
    connectorIds: z.array(stringOrObjectId).optional(),
    pendencyIds: z.array(stringOrObjectId).optional(),
    regionIds: z.array(stringOrObjectId).optional(),
    junctionBoxIds: z.array(stringOrObjectId).optional(),
    ductIds: z.array(stringOrObjectId).optional(),
    towerIds: z.array(stringOrObjectId).optional(),
  }),
});

type MoveReport = z.infer<typeof MoveReportSchema>;
type ReportTags = z.infer<typeof ReportTagsSchema>;
type UpdateProject = z.infer<typeof UpdateProjectSchema>;
type ElementsReport = z.infer<typeof ElementsReportSchema>;

export {
  PolygonReportSchema,
  PolygonReport,
  CreatePolygonReportDTOSchema,
  CreatePolygonReportDTO,
  PolygonReportKind,
  PolygonReportExtraKindReference,
  PolygonReportExtraSchema,
  ReportSummarySchema,
  ReportErrorSchema,
  BoxesSummarySchema,
  CablesSummarySchema,
  ClientsSummarySchema,
  PropertiesSummarySchema,
  PolesSummarySchema,
  PopsSummarySchema,
  PendencySummarySchema,
  PolygonGeoJSONSchema,
  MoveReportSchema,
  MoveReport,
  ReportTagsSchema,
  ReportTags,
  UpdateProjectSchema,
  UpdateProject,
  ElementsReportSchema,
  ElementsReport,
};
