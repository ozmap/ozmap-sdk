# Box Module

This document provides a concise guide to the Box module, focusing on the Box model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Box

Defines the structure for boxes.

```typescript
type Box = {
  kind: "Box";
  color?: string;
  fill_color?: string;
  name: string;
  address?: string;
  shared?: boolean; // default: false
  draft?: boolean; // default: false
  default_reserve?: number; // default: 0
  hierarchyLevel: number;
  boxType: string;
  pole: string;
  certified?: boolean; // default: false
  implanted: boolean;
  tags?: (string | Tag)[]; // default: []
  project: string | Project;
  pole: string | BasePoint;
  color?: string | Color;
  fill_color?: string | Color;
  boxType: string | BoxType;
  underground: boolean;
  cables?: string[]; // default: []
};
```

### CreateBoxDTO

Defines the structure for creating a box.

```typescript
type CreateBoxDTO = {
  kind?: "Box";
  color?: string;
  fill_color?: string;
  name?: string;
  address?: string;
  shared?: boolean; // default: false
  draft?: boolean; // default: false
  default_reserve?: number; // default: 0
  hierarchyLevel?: number;
  boxType?: string;
  pole?: string;
  certified?: boolean; // default: false
  implanted?: boolean;
  tags?: string[]; // default: []
  max_distance?: number;
  external_id?: any;
  template?: string;
};
```

### UpdateBoxDTO

Defines the structure for updating a box.

```typescript
type UpdateBoxDTO = {
  kind?: "Box";
  color?: string;
  fill_color?: string;
  name?: string;
  address?: string;
  shared?: boolean; // default: false
  draft?: boolean; // default: false
  default_reserve?: number; // default: 0
  hierarchyLevel?: number;
  boxType?: string;
  pole?: string;
  certified?: boolean; // default: false
  implanted?: boolean;
  tags?: string[]; // default: []
  external_id?: any;
};
```

## Example Usage

### Creating a Box

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBoxData: CreateBoxDTO = {
  name: "New Box",
  kind: "Box",
  hierarchyLevel: 1,
  boxType: "boxTypeId",
  pole: "poleId",
  implanted: true,
};

sdk.box.create(newBoxData).then((box) => {
  console.log('Box created:', box);
});
```

### Updating a Box

```typescript
import OZMapSDK from 'ozmapsdk';
const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBoxData: UpdateBoxDTO = {
  name: "Updated Box",
  hierarchyLevel: 2,
};

sdk.box.updateById('boxId', updateBoxData).then(() => {
  console.log('Box updated');
});
```

### Fetching Boxes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.box.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Boxes:', pagination);
});
```

### Fetching a Box by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.box.findById('boxId').then((box) => {
  console.log('Box:', box);
});
```

### Deleting a Box

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.box.deleteById('boxId').then(() => {
  console.log('Box deleted');
});
```