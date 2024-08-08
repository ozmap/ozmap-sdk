# Region Module

This document provides a concise guide to the Region module, focusing on the Region model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Region

Defines the structure for Region entities.

```typescript
type Region = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  polygon: {
    type: 'Polygon';
    coordinates: number[][];
  };
  name?: string | null;
  observation?: string | null;
  regionType: string | RegionType;
  color?: string | null;
  tags: (string | Tag)[];
  projects: (string | Project)[];
  borderColor?: string | null;
};
```

### CreateRegionDTO

Defines the structure for creating a Region.

```typescript
type CreateRegionDTO = {
  polygon: {
    type: 'Polygon';
    coordinates: number[][];
  };
  name?: string | null;
  observation?: string | null;
  regionType: string;
  color?: string | null;
  tags: string[];
  projects: string[];
  borderColor?: string | null;
};
```

### UpdateRegionDTO

Defines the structure for updating a Region.

```typescript
type UpdateRegionDTO = Partial<CreateRegionDTO>;
```

## Example Usage

### Creating a Region

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newRegionData: CreateRegionDTO = {
  polygon: {
    type: 'Polygon',
    coordinates: [[30.0, 10.0], [40.0, 40.0], [20.0, 40.0], [10.0, 20.0], [30.0, 10.0]],
  },
  name: "New Region",
  regionType: "regionTypeId",
  tags: ["tagId1", "tagId2"],
  projects: ["projectId1", "projectId2"],
};

sdk.region.create(newRegionData).then((region) => {
  console.log('Region created:', region);
});
```

### Updating a Region

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateRegionData: UpdateRegionDTO = {
  name: "Updated Region",
  color: "#FF0000",
};

sdk.region.updateById('regionId', updateRegionData).then(() => {
  console.log('Region updated');
});
```

### Fetching Regions

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.region.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Regions:', pagination);
});
```

### Fetching a Region by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.region.findById('regionId').then((region) => {
  console.log('Region:', region);
});
```

### Deleting a Region

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.region.deleteById('regionId').then(() => {
  console.log('Region deleted');
});
```