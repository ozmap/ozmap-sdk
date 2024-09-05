# ShelfType Module

This document provides a concise guide to the ShelfType module, focusing on the ShelfType model and its usage.

## Models

### ShelfType

Defines the structure for ShelfType entities.

```typescript
type ShelfType = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  code: string;
  prefix: string;
  brand: string;
  mold: string;
  description: string;
  size: number;
};
```

### CreateShelfTypeDTO

Defines the structure for creating a new ShelfType.

```typescript
type CreateShelfTypeDTO = {
  code?: string;
  prefix?: string;
  brand?: string;
  mold?: string;
  description?: string;
  size?: number;
  external_id?: any;
};
```

### UpdateShelfTypeDTO

Defines the structure for updating an existing ShelfType.

```typescript
type UpdateShelfTypeDTO = {
  code?: string;
  prefix?: string;
  brand?: string;
  mold?: string;
  description?: string;
  size?: number;
  external_id?: any;
};
```

## Example Usage

### Creating a ShelfType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newShelfTypeData: CreateShelfTypeDTO = {
  code: 'ST001',
  prefix: 'PX',
  brand: 'BrandX',
  mold: 'MoldY',
  description: 'Description here',
  size: 5,
};

sdk.shelfType.create(newShelfTypeData).then((shelfType) => {
  console.log('ShelfType created:', shelfType);
});
```

### Updating a ShelfType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateShelfTypeData: UpdateShelfTypeDTO = {
  description: 'Updated description',
};

sdk.shelfType.updateById('shelfTypeId', updateShelfTypeData).then(() => {
  console.log('ShelfType updated');
});
```

### Fetching shelfTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.shelfType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('shelfType:', pagination);
});
```

### Fetching a shelfType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.shelfType.findById('shelfTypeId').then((shelfType) => {
  console.log('shelfType:', shelfType);
});
```

### Deleting a shelfType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.shelfType.deleteById('shelfTypeId').then(() => {
  console.log('shelfType deleted');
});
```