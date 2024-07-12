# Point Module

This document provides a concise guide to the Point module, focusing on the Point model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Point

Defines the structure for Points.

```typescript
type Point = {
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
  adjacents: (string | BasePoint)[];
  tags: (string | Tag)[];
  kind: "Point";
  coords: [number, number];
};
```

### CreatePointDTO

Defines the structure for creating a Point.

```typescript
type CreatePointDTO = {
  tags?: string[];
  coords: [number, number];
  external_id?: string;
};
```

### UpdatePointDTO

```typescript
type UpdatePointDTO = {
  tags?: string[];
  coords?: [number, number];
  external_id?: string;
};
```
## Example Usage

### Creating a Point

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPointData: CreatePointDTO = {
  coords: [12.34, 56.78],
  tags: ["tagId1", "tagId2"],
  external_id: "externalId",
};

sdk.point.create(newPointData).then((point) => {
  console.log('Point created:', point);
});
```

### Updating a Point

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePointData: UpdatePointDTO = {
    coords: [12.34, 56.78]
};

sdk.point.updateById('pointId', updatePointData).then(() => {
  console.log('Point updated');
});
```
