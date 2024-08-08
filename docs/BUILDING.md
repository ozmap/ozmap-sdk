# Building Module

This document provides a concise guide to the Building module, focusing on the Building model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Building

Defines the structure for buildings.

```typescript
type Building = {
  kind: "Building";
  name: string;
  address?: string;
  implanted?: boolean; // default: true
  hasProblem?: boolean; // default: false
  tags?: (string | Tag)[]; // default: []
  project: string | Project;
  cables?: string[]; // default: []
};
```

### CreateBuildingDTO

Defines the structure for creating a building.

```typescript
type CreateBuildingDTO = {
  kind?: "Building";
  name?: string;
  address?: string;
  implanted?: boolean; // default: true
  tags?: string[]; // default: []
  external_id?: any;
};
```

### UpdateBuildingDTO

Defines the structure for updating a building.

```typescript
type UpdateBuildingDTO = {
  kind?: "Building";
  name?: string;
  address?: string;
  implanted?: boolean; // default: true
  tags?: string[]; // default: []
  external_id?: any;
};
```

## Example Usage

### Creating a Building

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateBuildingDTO } from './Building';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBuildingData: CreateBuildingDTO = {
  name: "New Building",
  kind: "Building",
  implanted: true,
};

sdk.building.create(newBuildingData).then((building) => {
  console.log('Building created:', building);
});
```

### Updating a Building

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateBuildingDTO } from './Building';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBuildingData: UpdateBuildingDTO = {
  name: "Updated Building",
  address: "123 Main St",
};

sdk.building.updateById('buildingId', updateBuildingData).then(() => {
  console.log('Building updated');
});
```

### Fetching Buildings

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.building.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Buildings:', pagination);
});
```

### Fetching a Building by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.building.findById('buildingId').then((building) => {
  console.log('Building:', building);
});
```

### Deleting a Building

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.building.deleteById('buildingId').then(() => {
  console.log('Building deleted');
});
```