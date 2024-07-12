# PON Module

This document provides a concise guide to the PON module, focusing on the PON model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### PON

Defines the structure for PONs (Passive Optical Networks).

```typescript
type PON = {
  _id?: string;
  id: string;
  external_id?: string;
  creatorData?: {
    id: string;
    name: string;
    username: string;
  };
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'PON';
  connectables: (string | null | NetworkConnectable)[];
  potency: number; // default: 0
  maximumClients: number; // default: Infinity
};
```

### CreatePONDTO

Defines the structure for creating a PON.

```typescript
type CreatePONDTO = {
  connectables?: (string | null)[];
  potency?: number; // default: 0
  maximumClients?: number; // default: Infinity
  slot: string;
  external_id?: any;
};
```

### UpdatePONDTO

Defines the structure for updating a PON.

```typescript
type UpdatePONDTO = {
  connectables?: (string | null)[];
  potency?: number; // default: 0
  maximumClients?: number; // default: Infinity
  external_id?: any;
};
```

## Example Usage

### Creating a PON

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPONData: CreatePONDTO = {
  slot: "slotId",
  potency: 10,
  maximumClients: 100,
};

sdk.pon.create(newPONData).then((pon) => {
  console.log('PON created:', pon);
});
```

### Updating a PON

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePONData: UpdatePONDTO = {
  potency: 15,
  maximumClients: 150,
};

sdk.pon.updateById('ponId', updatePONData).then(() => {
  console.log('PON updated');
});
```

### Fetching PONs

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pon.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('PONs:', pagination);
});
```

### Fetching a PON by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pon.findById('ponId').then((pon) => {
  console.log('PON:', pon);
});
```

### Deleting a PON

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pon.deleteById('ponId').then(() => {
  console.log('PON deleted');
});
```