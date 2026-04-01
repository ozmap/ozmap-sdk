# BoxStructureChangeRequest Module

This document covers the `BoxStructureChangeRequest` model — a change request type for modifying the internal structure (topology + design) of an existing box or building.

## Models

### BoxStructureChangeRequest

```typescript
type BoxStructureChangeRequest = {
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
  // BoxStructure-specific fields
  kind: "BoxStructure";
  status: "pending" | "approved" | "rejected";
  element: {
    id: string;
    kind: "box" | "building";
  };
  structure: {
    topology: Topology;
    design: BoxDesign;
  };
  actions: ChangeTopologyAction[];
  isStructureEmpty?: boolean;
};
```

### CreateBoxStructureChangeRequestDTO

```typescript
type CreateBoxStructureChangeRequestDTO = {
  kind?: "BoxStructure";
  element: {
    id: string;
    kind: "box" | "building";
  };
  description: string;
  structure: {
    topology: Topology;
    design: BoxDesign;
  };
  actions?: ChangeTopologyAction[];
  isStructureEmpty?: boolean;
};
```

### ChangeTopologyAction

Discriminated union of actions that describe topology changes:

```typescript
// Connect or disconnect two elements
type ConnectDisconnectAction = {
  action: "connect" | "disconnect";
  data: {
    elementA: ConnectionElement;
    elementB: ConnectionElement;
  };
};

// Create a new topology element
type CreateElementAction = {
  action: "create";
  data: { element: string; identifier: string; kind: ElementKind };
};

// Delete a topology element
type DeleteElementAction = {
  action: "delete";
  data: { element: string; identifier: string; kind: ElementKind };
};

// Update a property of a topology element
type UpdateElementAction = {
  action: "update";
  data: {
    element: string;
    identifier: string;
    kind: ElementKind;
    property: string;
    newValue: { value: string | number; identifier?: string };
    oldValue: { value: string | number; identifier?: string };
  };
};
```

## Example Usage

### Creating a BoxStructureChangeRequest

```typescript
import OZMapSDK, { CreateBoxStructureChangeRequestDTO } from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const dto: CreateBoxStructureChangeRequestDTO = {
  element: {
    id: "boxId",
    kind: "box",
  },
  description: "Updating internal fiber connections",
  structure: {
    topology: {
      box: "boxId",
      project: "projectId",
      cables: {},
      connectors: {
        "conn1": {
          id: "conn1",
          name: "Connector 1",
          isDrop: false,
          implanted: true,
          connectables: ["fiber1", "fiber2"],
        },
      },
    },
    design: {
      box: "boxId",
      project: "projectId",
      positions: {
        connectors: { "conn1": { x: 150, y: 250 } },
      },
    },
  },
  actions: [
    {
      action: "connect",
      data: {
        elementA: {
          element: "connectorId",
          identifier: "conn1",
          kind: "Connector",
          port: 0,
        },
        elementB: {
          element: "fiberId",
          identifier: "fiber1",
          kind: "Fiber",
          port: 0,
        },
      },
    },
  ],
};

sdk.boxStructureChangeRequest.create(dto).then((cr) => {
  console.log('Change request created:', cr.id, cr.status);
});
```

### Reviewing (Approving / Rejecting)

```typescript
// Approve
await sdk.boxStructureChangeRequest.reviewById("changeRequestId", {
  status: "approved",
  observation: "Looks good",
});

// Reject
await sdk.boxStructureChangeRequest.reviewById("changeRequestId", {
  status: "rejected",
  observation: "Connections are incorrect",
});
```

### Fetching BoxStructureChangeRequests

```typescript
// Find all (paginated)
sdk.boxStructureChangeRequest.find({
  filter: [{ property: 'status', value: 'pending', operator: 'eq' }],
}).then((result) => {
  console.log('Pending requests:', result.rows);
  console.log('Total:', result.total);
});

// Find by ID
sdk.boxStructureChangeRequest.findById("changeRequestId").then((cr) => {
  console.log('Change request:', cr);
});

// Delete
sdk.boxStructureChangeRequest.deleteById("changeRequestId");
```
