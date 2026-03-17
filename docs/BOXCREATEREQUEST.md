# BoxCreateRequest Module

This document covers the `BoxCreateRequest` model — a change request type for proposing the creation of a new box, optionally with an initial topology/design structure.

## Models

### BoxCreateRequest

```typescript
type BoxCreateRequest = {
  // BaseChangeRequest fields
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  code: string;
  applicable?: boolean;
  createdBy: string;
  review?: {
    by: { id: string; name: string; username: string };
    at: Date | string;
  };
  observation?: string;
  description: string;
  // BoxCreate-specific fields
  kind: "BoxCreate";
  status: "pending" | "approved" | "rejected";
  element?: {
    id?: string;
    kind: "box";
  };
  boxData: {
    boxType: string;
    project: string;
    coords: [number, number];
    name?: string;
    hierarchyLevel: number;
  };
  structure?: {
    topology: Topology;
    design: BoxDesign;
  };
  actions?: ChangeTopologyAction[];
  isStructureEmpty?: boolean;
};
```

### CreateBoxCreateRequestDTO

```typescript
type CreateBoxCreateRequestDTO = {
  kind?: "BoxCreate";
  description: string;
  structure?: {
    topology: Topology;
    design: BoxDesign;
  };
  actions?: ChangeTopologyAction[];
  isStructureEmpty?: boolean;
  boxData: {
    boxType: string;
    project: string;
    coords: [number, number];
    name?: string;
    hierarchyLevel?: number; // min 2
  };
};
```

### BoxCreateRequestApprove

Sent when approving a BoxCreateRequest. Optionally overrides box properties at approval time.

```typescript
type BoxCreateRequestApprove = {
  observation?: string;
  boxData?: Partial<CreateBoxDTO>;
};
```

### BoxCreateRequestReject

```typescript
type BoxCreateRequestReject = {
  observation: string; // required, non-empty
};
```

## Example Usage

### Creating a BoxCreateRequest

```typescript
import OZMapSDK, { CreateBoxCreateRequestDTO } from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const dto: CreateBoxCreateRequestDTO = {
  description: "New distribution box at Rua das Flores",
  boxData: {
    boxType: "boxTypeId",
    project: "projectId",
    coords: [-48.527442, -27.586604],
    name: "CTO-01",
    hierarchyLevel: 2,
  },
};

sdk.boxCreateRequest.create(dto).then((cr) => {
  console.log('Box create request created:', cr.id, cr.status);
});
```

### Creating with initial structure

```typescript
const dto: CreateBoxCreateRequestDTO = {
  description: "New CTO with pre-built topology",
  boxData: {
    boxType: "boxTypeId",
    project: "projectId",
    coords: [-48.527442, -27.586604],
    name: "CTO-02",
  },
  structure: {
    topology: {
      project: "projectId",
      splitters: {
        "spl1": {
          id: "spl1",
          name: "Splitter 1:8",
          isDrop: false,
          implanted: true,
          connectables: { input: [null], output: [null, null, null, null, null, null, null, null] },
          ports: [],
          isBalanced: true,
          orientation: "right",
          mostAttenuatedPort: 0,
          inputConnectionType: 0,
          outputConnectionType: 0,
          code: "1:8",
        },
      },
    },
    design: {
      project: "projectId",
      positions: {
        splitters: { "spl1": { x: 200, y: 200 } },
      },
    },
  },
};

sdk.boxCreateRequest.create(dto).then((cr) => {
  console.log('Created:', cr.id);
});
```

### Approving a BoxCreateRequest

```typescript
sdk.boxCreateRequest.approveById("requestId", {
  observation: "Approved — correct location confirmed",
  boxData: {
    name: "CTO-01-Final",
  },
}).then((result) => {
  console.log('Approved, resulting box:', result);
});
```

### Rejecting a BoxCreateRequest

```typescript
sdk.boxCreateRequest.rejectById("requestId", {
  observation: "Location conflicts with existing infrastructure",
}).then((result) => {
  console.log('Rejected:', result);
});
```

### Fetching BoxCreateRequests

```typescript
// Find all pending
sdk.boxCreateRequest.find({
  filter: [{ property: 'status', value: 'pending', operator: 'eq' }],
}).then((result) => {
  console.log('Pending box create requests:', result.rows);
});

// Find by ID
sdk.boxCreateRequest.findById("requestId").then((cr) => {
  console.log('Request:', cr);
});

// Delete
sdk.boxCreateRequest.deleteById("requestId");
```
