# Pendency Module

This document provides a concise guide to the Pendency module, focusing on the Pendency model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Pendency

Defines the structure for Pendencies.

```typescript
type Pendency = {
  owner: string | User;
  project: string | Project;
  pendencyType: string | PendencyType;
  color?: string;
  tags: Array<string | Tag>;
  responsibles: Array<string | User>;
  solved?: boolean;
  name?: string;
  description?: string;
  coords: [number, number];
  convertedTo?: {
    kind: string;
    element: string;
  };
};
```

### CreatePendencyDTO

Defines the structure for creating a Pendency.

```typescript
type CreatePendencyDTO = Partial<{
  owner: string;
  project: string;
  pendencyType: string;
  color?: string;
  tags: Array<string>;
  responsibles: Array<string>;
  solved?: boolean;
  name?: string;
  description?: string;
  coords: [number, number];
  external_id?: any;
}>;
```

### UpdatePendencyDTO

Defines the structure for updating a Pendency.

```typescript
type UpdatePendencyDTO = Partial<{
  owner: string;
  project: string;
  pendencyType: string;
  color?: string;
  tags: Array<string>;
  responsibles: Array<string>;
  solved?: boolean;
  name?: string;
  description?: string;
  coords: [number, number];
  external_id?: any;
}>;
```

## Example Usage

### Creating a Pendency

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPendencyData: CreatePendencyDTO = {
  owner: "userId",
  project: "projectId",
  pendencyType: "pendencyTypeId",
  coords: [10, 20],
  description: "This is a new pendency",
  name: "New Pendency",
};

sdk.pendency.create(newPendencyData).then((pendency) => {
  console.log('Pendency created:', pendency);
});
```

### Updating a Pendency

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePendencyData: UpdatePendencyDTO = {
  description: "Updated description",
  solved: true,
};

sdk.pendency.updateById('pendencyId', updatePendencyData).then(() => {
  console.log('Pendency updated');
});
```

### Fetching Pendencies

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendency.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Pendencies:', pagination);
});
```

### Fetching a Pendency by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendency.findById('pendencyId').then((pendency) => {
  console.log('Pendency:', pendency);
});
```

### Deleting a Pendency

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendency.deleteById('pendencyId').then(() => {
  console.log('Pendency deleted');
});
```