# PolygonReport Module

This document provides a guide to the PolygonReport module, including the main model, report data types, summary types, and custom operations (move, tags, project migration, element reports).

## Models

### PolygonReport

Represents a spatial polygon-based report generated for infrastructure within a geographic area.

```typescript
type PolygonReport = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date?: Date;
  polygon: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  name?: string | null;
  project: string;
  isGeneralReport: boolean;
  data?: PolygonReportData | ReportSummary;
};
```

### CreatePolygonReportDTO

```typescript
type CreatePolygonReportDTO = {
  _id?: string | null;
  polygon: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  name?: string | null;
  project?: string;
  isGeneralReport?: boolean | null;
  extra?: {
    kind?: string;  // e.g. 'generaltab', 'boxgrid', 'cablegrid'
    force?: boolean;
  };
};
```

### PolygonReportExtraKindReference

Available `extra.kind` values that map to report kinds on the server:

```typescript
const PolygonReportExtraKindReference = {
  GENERAL_TAB: 'generaltab',   // → general (summary)
  CABLE_GRID: 'cablegrid',     // → cables
  BOX_GRID: 'boxgrid',         // → boxes
  POP_GRID: 'popgrid',         // → pops
  SHELF_GRID: 'shelfgrid',     // → shelfs
  SECTOR_GRID: 'sectorgrid',   // → sectors
  CLIENT_GRID: 'clientgrid',   // → clients
  PROSPECT_GRID: 'prospectgrid', // → prospects
  PROPERTY_GRID: 'propertygrid', // → properties
  BUILDING_GRID: 'buildinggrid', // → buildings
  POLE_GRID: 'polegrid',       // → poles
  SPLITTER_GRID: 'splittergrid', // → splitters
  PENDENCY_GRID: 'pendencygrid', // → pendencies
  REGION_GRID: 'regiongrid',   // → regions
  JUNCTION_BOX_GRID: 'junctionboxgrid', // → junctionBoxes
  DUCT_GRID: 'ductgrid',       // → ducts
  TOWER_GRID: 'towergrid',     // → towers
};
```

### PolygonReportKind

Available report kinds for filtering report data generation:

```typescript
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
};
```

## Report Data

When `isGeneralReport` is `false`, the `data` field contains a detailed `PolygonReportData` with arrays of each element type found within the polygon. When `isGeneralReport` is `true`, `data` contains a `ReportSummary` with aggregated counters.

### PolygonReportData

```typescript
type PolygonReportData = {
  boxes: ReportBox[];
  reserves: ReportReserve[];
  pops: ReportPop[];
  shelfs: ReportShelf[];
  sectors: ReportSector[];
  buildings: ReportBuilding[];
  poles: ReportPole[];
  properties: ReportProperty[];
  points?: ReportPoint[];
  prospects: ReportProspect[];
  cables: ReportCable[];
  clients: ReportClient[];
  junctionBoxes: ReportJunctionBox[];
  ducts: ReportDuct[];
  splitters: ReportConnector[];
  pendencies: ReportPendency[];
  regions: ReportRegion[];
  towers: ReportTower[];
  errors: any[];
};
```

### ReportSummary (General Report)

```typescript
type ReportSummary = {
  id?: string;
  boxes: BoxesSummary[];
  cables: CablesSummary[];
  clients: ClientsSummary[];
  properties: PropertiesSummary[];
  poles: PolesSummary[];
  pops: PopsSummary[];
  pendencies: PendencySummary;
  splitters: ReportConnector[];
  buildings: ReportBuilding[];
  errors: ReportError[];
};
```

### ConnectorAttenuation (Box splitters)

```typescript
type ConnectorAttenuation = {
  id: string;
  name: string;
  kind: string;
  isBalanced: boolean;
  parent: string;
  project: string;
  implanted: boolean;
  parentName: string;
  isDrop: boolean;
  observation: string;
  connectorType: string;
  connectorTypeCode: string;
  input: number;
  availability: number;
  total: number;
  mostAttenuatedPort: number;
  min_potency: number;
  max_potency: number;
  createdAt: Date;
};
```

### PopConnectorAttenuation (POP splitters)

```typescript
type PopConnectorAttenuation = {
  id: string;
  name: string;
  kind: string;
  parent: string;
  parentName: string;
  project: string;
  implanted: boolean;
  isDrop: boolean;
  observation: string;
  connectorType: string;
  connectorTypeCode: string;
  input: number;
  total: number;
  createdAt: Date;
  size?: string;
  fabricationDate?: Date;
  radioCapacity?: string;
  potency?: number;
  autonomy?: string;
  serialNumber?: string;
  shelf?: string;
  tags?: string[];
  posts?: number;
};
```

## Custom Operations

### MoveReport

Translates all elements in a polygon report by a coordinate offset.

```typescript
type MoveReport = {
  lat: number;
  lng: number;
};
```

### ReportTags

Add or remove tags from all elements within a report.

```typescript
type ReportTags = {
  tags: string[];
};
```

### UpdateProject

Migrates report elements from the current project to a new project.

```typescript
type UpdateProject = {
  project: string;
  ids: string[];
};
```

### ElementsReport

Generate a complete or count report for specific element IDs.

```typescript
type ElementsReport = {
  elements: {
    cableIds?: string[];
    boxIds?: string[];
    popIds?: string[];
    shelfIds?: string[];
    sectorIds?: string[];
    clientIds?: string[];
    prospectIds?: string[];
    propertyIds?: string[];
    buildingIds?: string[];
    poleIds?: string[];
    connectorIds?: string[];
    pendencyIds?: string[];
    regionIds?: string[];
    junctionBoxIds?: string[];
    ductIds?: string[];
    towerIds?: string[];
  };
};
```

## Example Usage

### Importing types

```typescript
import OZMapSDK, {
  PolygonReport,
  CreatePolygonReportDTO,
  PolygonReportKind,
  PolygonReportExtraKindReference,
  MoveReport,
  ReportTags,
  ElementsReport,
} from 'ozmapsdk';
```

### Creating a Polygon Report

```typescript
const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const report: CreatePolygonReportDTO = {
  polygon: {
    type: 'Polygon',
    coordinates: [[
      [-48.530045, -27.57414],
      [-48.52983, -27.587263],
      [-48.523779, -27.587225],
      [-48.523264, -27.573645],
      [-48.530045, -27.57414],
    ]],
  },
  name: 'Relatório: 17/03/2026',
  project: 'projectId',
  isGeneralReport: null,
  extra: {
    kind: PolygonReportExtraKindReference.GENERAL_TAB,
    force: true,
  },
};

sdk.polygonReport.create(report).then((created) => {
  console.log('Report created:', created.id);
});
```

### Listing Reports

```typescript
sdk.polygonReport.find().then((result) => {
  console.log('Reports:', result.rows);
});
```

### Moving Report Elements

Translates all elements in a report by a coordinate offset.

```typescript
sdk.polygonReport.moveById('reportId', { lat: 0.001, lng: -0.002 }).then(() => {
  console.log('Elements moved');
});
```

### Adding Tags

```typescript
sdk.polygonReport.addTagsById('reportId', { tags: ['tagId1', 'tagId2'] }).then(() => {
  console.log('Tags added');
});
```

### Removing Tags

```typescript
sdk.polygonReport.removeTagsById('reportId', { tags: ['tagId1'] }).then(() => {
  console.log('Tags removed');
});
```

### Migrating Elements to Another Project

```typescript
sdk.polygonReport.updateProject({
  project: 'newProjectId',
  ids: ['reportId1', 'reportId2'],
}).then((results) => {
  results.forEach((r) => {
    console.log('Record:', r.record, 'Error:', r.error);
  });
});
```

### Complete Elements Report

Generate a detailed report for specific element IDs.

```typescript
sdk.polygonReport.createCompleteElementsReport({
  elements: {
    boxIds: ['box1', 'box2'],
    cableIds: ['cable1'],
  },
}).then((report) => {
  console.log('Complete report:', report);
});
```

### Count Elements Report

Generate a summary count report for specific element IDs.

```typescript
sdk.polygonReport.createCountElementsReport({
  elements: {
    poleIds: ['pole1', 'pole2'],
  },
}).then((report) => {
  console.log('Count report:', report);
});
```

### Deleting a Report

```typescript
sdk.polygonReport.deleteById('reportId').then(() => {
  console.log('Report deleted');
});
```
