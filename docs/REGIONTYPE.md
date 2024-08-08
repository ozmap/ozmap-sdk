# RegionType Module

This document provides a concise guide to the RegionType module, focusing on the RegionType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### RegionType

Defines the structure for RegionType entities.

```typescript
type RegionType = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  name: string;
  color: string;
  description?: string | null;
  lineWidth: number;
  borderColor: string;
};
```

### CreateRegionTypeDTO

Defines the structure for creating a RegionType.

```typescript
type CreateRegionTypeDTO = {
  name: string;
  color?: string;
  description?: string | null;
  lineWidth?: number;
  borderColor: string;
  external_id?: any;
};
```

### UpdateRegionTypeDTO

Defines the structure for updating a RegionType.

```typescript
type UpdateRegionTypeDTO = Partial<CreateRegionTypeDTO>;
```

## Example Usage

### Creating a RegionType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newRegionTypeData: CreateRegionTypeDTO = {
  name: "New Region Type",
  color: "3388FF",
  borderColor: "FFFFFF",
  lineWidth: 4,
};

sdk.regionType.create(newRegionTypeData).then((regionType) => {
  console.log('RegionType created:', regionType);
});
```

### Updating a RegionType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateRegionTypeData: UpdateRegionTypeDTO = {
  description: "Updated description",
};

sdk.regionType.updateById('regionTypeId', updateRegionTypeData).then(() => {
  console.log('RegionType updated');
});
```

### Fetching RegionTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.regionType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('RegionTypes:', pagination);
});
```

### Fetching a RegionType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.regionType.findById('regionTypeId').then((regionType) => {
  console.log('RegionType:', regionType);
});
```

### Deleting a RegionType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.regionType.deleteById('regionTypeId').then(() => {
  console.log('RegionType deleted');
});
```
