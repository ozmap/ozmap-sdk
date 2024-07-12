# BaseBox Module

This document provides a concise guide to the BaseBox module, focusing on the BaseBox model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### BaseBox

Defines the structure for base boxes.

```typescript
type BaseBox = {
  tags?: string[]; // default: []
  project: string;
  cables?: string[]; // default: []
  pole?: string;
  name?: string;
  kind: string; // Enum: 'Box', 'Building', 'Property', 'Pop'
  observation?: string;
  coords: [number, number];
};
```

### CreateBaseBoxDTO

Defines the structure for creating a base box.

```typescript
type CreateBaseBoxDTO = {
  tags?: string[];
  project: string;
  cables?: string[];
  pole?: string;
  name?: string;
  kind: string; // Enum: 'Box', 'Building', 'Property', 'Pop'
  observation?: string;
  coords: [number, number];
};
```

### UpdateBaseBoxDTO

Defines the structure for updating a base box.

```typescript
type UpdateBaseBoxDTO = {
  tags?: string[];
  project?: string;
  cables?: string[];
  pole?: string;
  name?: string;
  kind?: string; // Enum: 'Box', 'Building', 'Property', 'Pop'
  observation?: string;
  coords?: [number, number];
};
```

## Example Usage

### Creating a BaseBox

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBaseBoxData: CreateBaseBoxDTO = {
  project: 'projectId123',
  kind: 'Box',
  coords: [40.7128, -74.006],
};

sdk.baseBox.create(newBaseBoxData).then((baseBox) => {
  console.log('BaseBox created:', baseBox);
});
```

### Updating a BaseBox

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBaseBoxData: UpdateBaseBoxDTO = {
  name: 'Updated BaseBox',
  coords: [40.7128, -74.006],
};

sdk.baseBox.updateById('baseBoxId', updateBaseBoxData).then(() => {
  console.log('BaseBox updated');
});
```

### Fetching BaseBoxes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.baseBox.find().then((pagination) => {
  console.log('BaseBoxes:', pagination);
});
```

### Fetching a BaseBox by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.baseBox.findById('baseBoxId').then((baseBox) => {
  console.log('BaseBox:', baseBox);
});
```

### Deleting a BaseBox

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.baseBox.deleteById('baseBoxId').then(() => {
  console.log('BaseBox deleted');
});
```
