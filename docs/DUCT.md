# Duct Module

This document provides a concise guide to the Duct module, focusing on the Duct model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Duct

Defines the structure for ducts.

```typescript
type Duct = {
  id: string;
  name: string;
  observation?: string;
  implanted: boolean;
  project: string;
  ductType: string;
  color?: string;
  length: number;
  edgeA: string;
  edgeB: string;
  shared: boolean;
  immediateParent?: string | Duct;
  parent?: string | Duct;
  points: string[];
  tags: string[];
  index: number;
  typeColor: {
    regular: string;
    notImplanted: string;
  };
  external_id?: any;
  subDucts?: SubDuctStructure[];
};
```

### CreateDuctDTO

Defines the structure for creating a duct.

```typescript
type CreateDuctDTO = {
  name?: string;
  observation?: string;
  implanted?: boolean;
  project: string;
  ductType: string;
  color?: string;
  edgeA: string;
  edgeB: string;
  shared?: boolean;
  points: string[];
  tags: string[];
  external_id?: any;
  subDucts?: SubDuctStructure[];
};
```

### UpdateDuctDTO

Defines the structure for updating a duct.

```typescript
type UpdateDuctDTO = {
  name?: string;
  observation?: string;
  implanted?: boolean;
  project?: string;
  ductType?: string;
  color?: string;
  length?: number;
  edgeA?: string;
  edgeB?: string;
  shared?: boolean;
  immediateParent?: string;
  parent?: string;
  points?: string[];
  tags?: string[];
  index?: number;
  typeColor?: {
    regular?: string;
    notImplanted?: string;
  };
  external_id?: any;
};
```

## Example Usage

### Creating a Duct

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateDuctDTO } from './Duct';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newDuctData: CreateDuctDTO = {
  project: "projectId",
  ductType: "ductTypeId",
  edgeA: "junctionBoxIdA",
  edgeB: "junctionBoxIdB",
  points: ["pointId1", "pointId2"],
  tags: ["tagId1", "tagId2"],
};

sdk.duct.create(newDuctData).then((duct) => {
  console.log('Duct created:', duct);
});
```

### Updating a Duct

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateDuctDTO } from './Duct';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateDuctData: UpdateDuctDTO = {
  name: "Updated Duct Name",
  observation: "Updated observation",
};

sdk.duct.updateById('ductId', updateDuctData).then(() => {
  console.log('Duct updated');
});
```

### Fetching Ducts

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.duct.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Ducts:', pagination);
});
```

### Fetching a Duct by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.duct.findById('ductId').then((duct) => {
  console.log('Duct:', duct);
});
```

### Deleting a Duct

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.duct.deleteById('ductId').then(() => {
  console.log('Duct deleted');
});
```