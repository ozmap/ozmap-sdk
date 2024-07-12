# Property Module

This document provides a concise guide to the Property module, focusing on the Property model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Property

Defines the structure for Property entities.

```typescript
type Property = {
  _id?: string;
  id: string;
  external_id?: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'property';
  parent?: {
    id: string | Building;
  };
  address?: string;
  box?: string | Box;
  pole?: string | BasePoint;
  observation?: string;
  potencyRead?: number;
  client?: string | FTTHClient;
  drop?: string | Cable;
  tags: (string | Tag)[];
  project: string | Project;
};
```

### CreatePropertyDTO

Defines the structure for creating a Property.

```typescript
type CreatePropertyDTO = {
  kind?: 'property';
  parent?: {
    id: string;
  };
  address?: string | null;
  box?: string | null;
  pole?: string | null;
  observation?: string | null;
  potencyRead?: number | null;
  client?: string | CreateFTTHClientDTO | null;
  drop?: string | null;
  tags?: (string)[];
  project?: string;
  external_id?: any;
};
```

### UpdatePropertyDTO

Defines the structure for updating a Property.

```typescript
type UpdatePropertyDTO = {
  kind?: 'property';
  parent?: {
    id: string;
  };
  address?: string | null;
  box?: string | null;
  pole?: string | null;
  observation?: string | null;
  potencyRead?: number | null;
  client?: string | CreateFTTHClientDTO | null;
  drop?: string |  null;
  tags?: (string)[];
  project?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Property

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPropertyData: CreatePropertyDTO = {
  address: "123 Main St",
  client: "clientId",
  pole: "poleId",
};

sdk.property.create(newPropertyData).then((property) => {
  console.log('Property created:', property);
});
```

### Updating a Property

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePropertyData: UpdatePropertyDTO = {
  address: "456 Elm St",
};

sdk.property.updateById('propertyId', updatePropertyData).then(() => {
  console.log('Property updated');
});
```

### Fetching Properties

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.property.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Properties:', pagination);
});
```

### Fetching a Property by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.property.findById('propertyId').then((property) => {
  console.log('Property:', property);
});
```

### Deleting a Property

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.property.deleteById('propertyId').then(() => {
  console.log('Property deleted');
});
```
