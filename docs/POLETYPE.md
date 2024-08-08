# PoleType Module

This document provides a concise guide to the PoleType module, focusing on the PoleType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### PoleType

Defines the structure for Pole Types.

```typescript
type PoleType = {
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
  name: string;
  prefix: string; // default: 'P_'
  viabilityAllowed: boolean; // default: true
  color: string; // default: '#3388FF'
  description: string;
};
```

### CreatePoleTypeDTO

Defines the structure for creating a Pole Type.

```typescript
type CreatePoleTypeDTO = {
  name: string;
  prefix?: string; // default: 'P_'
  viabilityAllowed?: boolean; // default: true
  color?: string; // default: '#3388FF'
  description: string;
  external_id?: any;
};
```

### UpdatePoleTypeDTO

Defines the structure for updating a Pole Type.

```typescript
type UpdatePoleTypeDTO = {
  name?: string;
  prefix?: string; // default: 'P_'
  viabilityAllowed?: boolean; // default: true
  color?: string; // default: '#3388FF'
  description?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Pole Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });


const newPoleTypeData: CreatePoleTypeDTO = {
  name: "New Pole Type",
  description: "Description of the new pole type",
};

sdk.poleType.create(newPoleTypeData).then((poleType) => {
  console.log('Pole Type created:', poleType);
});
```

### Updating a Pole Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePoleTypeData: UpdatePoleTypeDTO = {
  name: "Updated Pole Type",
  description: "Updated description of the pole type",
};

sdk.poleType.updateById('poleTypeId', updatePoleTypeData).then(() => {
  console.log('Pole Type updated');
});
```

### Fetching Pole Types

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.poleType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Pole Types:', pagination);
});
```

### Fetching a Pole Type by ID

```typescript
sdk.poleType.findById('poleTypeId').then((poleType) => {
  console.log('Pole Type:', poleType);
});
```

### Deleting a Pole Type

```typescript
sdk.poleType.deleteById('poleTypeId').then(() => {
  console.log('Pole Type deleted');
});
```