# BoxDesign Module

This document provides a concise guide to the BoxDesign module, including BoxDesign, Topology, BoxStructure, and their related sub-types.

## Models

### BoxDesign

Defines the visual design/layout of a box, including element positions within the box diagram.

```typescript
type BoxDesign = {
  id?: string | null;
  box?: string;
  project?: string;
  isTemplate?: boolean;
  template?: string | null;
  positions?: DesignPositions;
};
```

### DesignPositions

Defines the positions of elements within the box design.

```typescript
type DesignPositions = {
  cables?: Record<string, SimplePoint>;
  connectors?: Record<string, SimplePoint>;
  dios?: Record<string, SimplePoint>;
  drops?: Record<string, SimplePoint>;
  fusions?: Record<string, SimplePoint>;
  splitters?: Record<string, SimplePoint>;
  switches?: Record<string, SimplePoint>;
  fibers?: Record<string, ComposedPosition>;
  cords?: Record<string, ComposedPosition>;
  passings?: Record<string, ComposedPosition>;
  postits?: PostItPositions;
  children?: Record<string, unknown>[];
};
```

### SimplePoint

```typescript
type SimplePoint = {
  x: number;
  y: number;
};
```

### ComposedPosition

```typescript
type ComposedPosition = {
  vertices: SimplePoint[];
  labels?: Label[];
};
```

### Topology

Defines the logical topology of a box, including all its cables, connectors, splitters, and other network elements.

```typescript
type Topology = {
  box?: string;
  project?: string;
  id?: string;
  cables?: Record<string, TopologyCables>;
  drops?: Record<string, TopologyDrops>;
  switches?: Record<string, TopologyConnectors>;
  connectors?: Record<string, TopologyConnectors>;
  splitters?: Record<string, TopologySplitter>;
  passings?: Record<string, TopologyPassing>;
  fusions?: Record<string, TopologyConnectors>;
  dios?: Record<string, TopologyDIO>;
  cords?: TopologyCords;
  extraData?: any;
  checksum?: string;
};
```

### TopologyCables

```typescript
type TopologyCables = {
  id: string;
  name: string;
  looseNumber: number;
  orientation: string;
  observation?: string;
  implanted: boolean;
  fibersColourMap: string[];
  groupsColourMap: string[];
  defaultFiberColor: string;
  defaultTubeColor: string;
  fibers: string[];
  project: string;
  cableType?: string;
};
```

### TopologyDrops

Extends TopologyCables with property data for drop cables.

```typescript
type TopologyDrops = TopologyCables & {
  propertyData: {
    address?: string | null;
    coords?: [number, number];
    lat?: number;
    lng?: number;
    id: string;
    observation: string;
    client?: TopologyClients | null;
  };
};
```

### TopologyConnectors

```typescript
type TopologyConnectors = {
  id: string;
  name: string;
  isDrop: boolean;
  implanted: boolean;
  connectorType?: string;
  observation?: string;
  connectables: (string | null)[];
};
```

### TopologySplitter

```typescript
type TopologySplitter = {
  id: string;
  name: string;
  isDrop: boolean;
  implanted: boolean;
  connectorType?: string;
  observation?: string;
  connectables: {
    input: (string | null)[];
    output: (string | null)[];
  };
  ports: SplitterPort[];
  isBalanced: boolean;
  orientation: string;
  mostAttenuatedPort: number;
  inputConnectionType: number;
  outputConnectionType: number;
  code: string;
};
```

### TopologyDIO

```typescript
type TopologyDIO = {
  id: string;
  name: string;
  isDrop: boolean;
  implanted: boolean;
  connectorType?: string;
  observation?: string;
  connectables: {
    input: (string | null)[];
    output: (string | null)[];
  };
  tray_number?: number;
  input_label?: string[];
  output_label?: string[];
};
```

### BoxStructure

Combines topology and design into a single structure.

```typescript
type BoxStructure = {
  topology: Topology;
  design: BoxDesign;
};
```

## Example Usage

### Importing types

```typescript
import OZMapSDK, {
  BoxDesign,
  BoxStructure,
  Topology,
  TopologyCables,
  TopologyConnectors,
  TopologySplitter,
  DesignPositions,
} from 'ozmapsdk';
```

### Getting a Box Structure

`getStructure` calls the topology and design endpoints in parallel and merges the result into a `BoxStructure`.

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

// Works on both sdk.box and sdk.building
sdk.box.getStructure('boxId').then((structure) => {
  console.log('Topology:', structure.topology);
  console.log('Design:', structure.design);
});
```

### Updating a Box Structure

`updateStructure` sends both topology and design together to the `PATCH base-boxes/:id/structure` endpoint.

```typescript
import OZMapSDK, { BoxStructure } from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatedStructure: BoxStructure = {
  topology: {
    box: "boxId",
    project: "projectId",
    cables: {
      "cable1": {
        id: "cable1",
        name: "Cable 1",
        looseNumber: 12,
        orientation: "left",
        implanted: true,
        fibersColourMap: ["blue", "orange", "green"],
        groupsColourMap: ["blue"],
        defaultFiberColor: "blue",
        defaultTubeColor: "blue",
        fibers: ["fiber1", "fiber2"],
        project: "projectId",
      },
    },
    connectors: {
      "conn1": {
        id: "conn1",
        name: "Connector 1",
        isDrop: false,
        implanted: true,
        connectables: ["fiber1", null],
      },
    },
  },
  design: {
    box: "boxId",
    project: "projectId",
    positions: {
      cables: { "cable1": { x: 100, y: 200 } },
      connectors: { "conn1": { x: 150, y: 250 } },
    },
  },
};

sdk.box.updateStructure('boxId', updatedStructure).then(() => {
  console.log('Structure updated');
});

// Also works for buildings:
sdk.building.getStructure('buildingId').then((structure) => {
  console.log('Building structure:', structure);
});
```
