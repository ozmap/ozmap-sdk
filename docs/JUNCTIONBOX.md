# JunctionBox Module

This document provides a concise guide to the JunctionBox module, focusing on the JunctionBox model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### JunctionBox

Defines the structure for junction boxes.

```typescript
type JunctionBox = {
  name: string;
  observation?: string;
  kind: "JUNCTION_BOX";
  address?: string;
  implanted: boolean; // default: false
  project: string | Project;
  junctionBoxType: string | JunctionBoxType;
  color?: string | Color;
  typeColor: string;
  shared: boolean; // default: false
  tags: (string | Tag)[];
  adjacents: (string | BasePoint)[];
};
```

### CreateJunctionBoxDTO

Defines the structure for creating a junction box.

```typescript
type CreateJunctionBoxDTO = {
  name: string;
  observation?: string;
  address?: string;
  implanted?: boolean; // default: false
  project: string;
  junctionBoxType: string;
  color?: string;
  shared?: boolean; // default: false
  tags?: string[]; // default: []
  adjacents?: string[]; // default: []
};
```

### UpdateJunctionBoxDTO

Defines the structure for updating a junction box.

```typescript
type UpdateJunctionBoxDTO = {
  name?: string;
  observation?: string;
  address?: string;
  implanted?: boolean; // default: false
  junctionBoxType?: string;
  color?: string;
  shared?: boolean; // default: false
  tags?: string[]; // default: []
  adjacents?: string[]; // default: []
};
```

## Example Usage

### Creating a Junction Box

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateJunctionBoxDTO } from './JunctionBox';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newJunctionBoxData: CreateJunctionBoxDTO = {
  name: "New Junction Box",
  project: "projectId",
  junctionBoxType: "junctionBoxTypeId",
};

sdk.junctionBox.create(newJunctionBoxData).then((junctionBox) => {
  console.log('Junction box created:', junctionBox);
});
```

### Updating a Junction Box

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateJunctionBoxDTO } from './JunctionBox';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateJunctionBoxData: UpdateJunctionBoxDTO = {
  name: "Updated Junction Box",
  color: "blue",
};

sdk.junctionBox.updateById('junctionBoxId', updateJunctionBoxData).then(() => {
  console.log('Junction box updated');
});
```

### Fetching Junction Boxes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.junctionBox.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Junction boxes:', pagination);
});
```

### Fetching a Junction Box by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.junctionBox.findById('junctionBoxId').then((junctionBox) => {
  console.log('Junction box:', junctionBox);
});
```

### Deleting a Junction Box

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.junctionBox.deleteById('junctionBoxId').then(() => {
  console.log('Junction box deleted');
});
```