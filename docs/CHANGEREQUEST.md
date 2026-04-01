# ChangeRequest Module

This document covers the base `ChangeRequest` model. For specific change request types, see:
- [BOXSTRUCTURECHANGEREQUEST.md](./BOXSTRUCTURECHANGEREQUEST.md) — modifying an existing box's internal structure
- [BOXCREATEREQUEST.md](./BOXCREATEREQUEST.md) — proposing the creation of a new box

## Models

### BaseChangeRequest

Base model shared by all change request types.

```typescript
type BaseChangeRequest = {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: "BoxStructure" | "BoxCreate";
  status: "pending" | "approved" | "rejected";
  element: {
    id: string;
    kind: string;
  };
  code: string;
  applicable?: boolean;
  createdBy: string;
  review?: {
    by: { id: string; name: string; username: string };
    at: Date | string;
  };
  observation?: string;
  description: string;
};
```

## SDK Proxies

| Proxy | SDK property | Route |
|---|---|---|
| Base ChangeRequest (read-only) | `sdk.changeRequest` | `change-requests` |
| BoxStructureChangeRequest | `sdk.boxStructureChangeRequest` | `change-requests/box-structures` |
| BoxCreateRequest | `sdk.boxCreateRequest` | `box-create-requests` |

## Example Usage

### Fetching all ChangeRequests

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

// Fetch all change requests (all kinds)
sdk.changeRequest.find().then((result) => {
  console.log('Change requests:', result.rows);
  console.log('Total:', result.total);
});

// Find by ID
sdk.changeRequest.findById("changeRequestId").then((cr) => {
  console.log('Change request:', cr);
});

// Fetch only pending
sdk.changeRequest.find({
  filter: [{ property: 'status', value: 'pending', operator: 'eq' }],
}).then((result) => {
  console.log('Pending:', result.rows);
});
```
});
```
