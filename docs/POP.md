# Pop Module

This document provides a concise guide to the Pop module, focusing on the Pop model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Pop

Defines the structure for Pop entities.

```typescript
type Pop = {
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
  kind: 'POP';
  name: string;
  popType: string | PopType;
  shared?: boolean; // default: false
  hierarchyLevel: number;
  draft?: boolean; // default: false
  implanted: boolean;
  certified?: boolean; // default: false
  structureOrder: string[];
  address?: string;
  pole: string | BasePoint;
  tags?: (string | Tag)[]; // default: []
  project: string | Project;
  cables?: string[]; // default: []
};
```

### CreatePopDTO

Defines the structure for creating a Pop.

```typescript
type CreatePopDTO = {
  kind?: 'POP';
  name?: string;
  popType?: string;
  shared?: boolean; // default: false
  hierarchyLevel?: number;
  draft?: boolean; // default: false
  implanted?: boolean;
  certified?: boolean; // default: false
  structureOrder?: string[];
  address?: string;
  pole?: string;
  external_id?: any;
  tags?: string[]; // default: []
};
```

### UpdatePopDTO

Defines the structure for updating a Pop.

```typescript
type UpdatePopDTO = {
  kind?: 'POP';
  name?: string;
  popType?: string;
  shared?: boolean; // default: false
  hierarchyLevel?: number;
  draft?: boolean; // default: false
  implanted?: boolean;
  certified?: boolean; // default: false
  structureOrder?: string[];
  address?: string;
  pole?: string;
  external_id?: any;
  tags?: string[]; // default: []
};
```

## Example Usage

### Creating a Pop

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPopData: CreatePopDTO = {
  name: "New Pop",
  hierarchyLevel: 1,
  popType: "popTypeId",
  pole: "poleId",
  implanted: true,
};

sdk.pop.create(newPopData).then((pop) => {
  console.log('Pop created:', pop);
});
```

### Updating a Pop

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePopData: UpdatePopDTO = {
  name: "Updated Pop",
  hierarchyLevel: 2,
};

sdk.pop.updateById('popId', updatePopData).then(() => {
  console.log('Pop updated');
});
```

### Fetching Pops

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pop.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Pops:', pagination);
});
```

### Fetching a Pop by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pop.findById('popId').then((pop) => {
  console.log('Pop:', pop);
});
```

### Deleting a Pop

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pop.deleteById('popId').then(() => {
  console.log('Pop deleted');
});
```