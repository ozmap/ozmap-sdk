# HorizontalCondominium Module

This document provides a concise guide to the HorizontalCondominium module, focusing on the HorizontalCondominium model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### HorizontalCondominium

Defines the structure for horizontal condominiums.

```typescript
type HorizontalCondominium = {
  polygon: {
    type: "Polygon";
    coordinates: number[][];
  };
  project: string | Project;
  name?: string;
  observation?: string;
  address?: string;
  color?: string;
  tags: (string | Tag)[];
};
```

### CreateHorizontalCondominiumDTO

Defines the structure for creating a horizontal condominium.

```typescript
type CreateHorizontalCondominiumDTO = {
  polygon: {
    type: "Polygon";
    coordinates: number[][];
  };
  project: string;
  name?: string;
  observation?: string;
  address?: string;
  color?: string;
  tags: string[];
  external_id: any;
};
```

### UpdateHorizontalCondominiumDTO

Defines the structure for updating a horizontal condominium.

```typescript
type UpdateHorizontalCondominiumDTO = {
  polygon?: {
    type: "Polygon";
    coordinates: number[][];
  };
  project?: string;
  name?: string;
  observation?: string;
  address?: string;
  color?: string;
  tags?: string[];
  external_id?: any;
};
```

## Example Usage

### Creating a Horizontal Condominium

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateHorizontalCondominiumDTO } from './HorizontalCondominium';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newHorizontalCondominiumData: CreateHorizontalCondominiumDTO = {
  polygon: {
    type: "Polygon",
    coordinates: [[0, 0], [0, 1], [1, 1], [1, 0], [0, 0]],
  },
  project: "projectId",
  name: "New Condominium",
  tags: ["tag1", "tag2"],
  external_id: "externalId",
};

sdk.horizontalCondominium.create(newHorizontalCondominiumData).then((horizontalCondominium) => {
  console.log('Horizontal condominium created:', horizontalCondominium);
});
```

### Updating a Horizontal Condominium

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateHorizontalCondominiumDTO } from './HorizontalCondominium';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateHorizontalCondominiumData: UpdateHorizontalCondominiumDTO = {
  name: "Updated Condominium",
  color: "blue",
};

sdk.horizontalCondominium.updateById('horizontalCondominiumId', updateHorizontalCondominiumData).then(() => {
  console.log('Horizontal condominium updated');
});
```

### Fetching Horizontal Condominiums

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.horizontalCondominium.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Horizontal condominiums:', pagination);
});
```

### Fetching a Horizontal Condominium by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.horizontalCondominium.findById('horizontalCondominiumId').then((horizontalCondominium) => {
  console.log('Horizontal condominium:', horizontalCondominium);
});
```

### Deleting a Horizontal Condominium

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.horizontalCondominium.deleteById('horizontalCondominiumId').then(() => {
  console.log('Horizontal condominium deleted');
});
```