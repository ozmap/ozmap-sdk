# POLE Module

This document provides a concise guide to the POLE module, focusing on the Pole model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Pole

Defines the structure for poles.

```typescript
type Pole = {
  name: string;
  usable?: boolean; // default: true
  kind: 'POLE';
  observation?: string; // default: ''
  color?: string;
  poleType: string;
  address?: string;
  licensing?: {
    status?: PoleLicensingStatus; // UNKNOWN, PENDING or LICENSED. default: UNKNOWN
    protocol?: string | null;
  };
  adjacents?: (string | BasePoint)[]; // default: []
  tags?: (string | Tag)[]; // default: []
};
```

### CreatePoleDTO

Defines the structure for creating a pole.

```typescript
type CreatePoleDTO = {
  name?: string;
  usable?: boolean;
  observation?: string;
  color?: string;
  poleType?: string;
  address?: string;
  licensing?: {
    status?: PoleLicensingStatus; // UNKNOWN, PENDING or LICENSED. default: UNKNOWN
    protocol?: string | null;
  };
  adjacents?: (string | BasePoint)[];
  tags?: (string | Tag)[];
  external_id?: any;
  lat?: number;
  lng?: number;
};
```

### UpdatePoleDTO

Defines the structure for updating a pole.

```typescript
type UpdatePoleDTO = {
  name?: string;
  usable?: boolean;
  observation?: string;
  color?: string;
  poleType?: string;
  address?: string;
  licensing?: {
    status?: PoleLicensingStatus;
    protocol?: string | null;
  };
  adjacents?: (string | BasePoint)[];
  tags?: (string | Tag)[];
  external_id?: any;
  lat?: number;
  lng?: number;
};
```

## Example Usage

### Creating a Pole

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPoleData: CreatePoleDTO = {
  name: 'New Pole',
  external_id: 'externalId123',
  lat: 40.7128,
  lng: -74.006,
};

sdk.pole.create(newPoleData).then((pole) => {
  console.log('Pole created:', pole);
});
```

### Updating a Pole

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePoleData: UpdatePoleDTO = {
  name: 'Updated Pole',
  external_id: 'updatedExternalId456',
  lat: 40.7128,
  lng: -74.006,
};

sdk.pole.updateById('poleId', updatePoleData).then(() => {
  console.log('Pole updated');
});
```

### Fetching Poles

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pole.find().then((pagination) => {
  console.log('Poles:', pagination);
});
```

### Fetching a Pole by ID

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pole.findById('poleId').then((pole) => {
  console.log('Pole:', pole);
});
```

### Deleting a Pole

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pole.deleteById('poleId').then(() => {
  console.log('Pole deleted');
});
```
