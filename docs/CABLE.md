# Cable Module

This document provides a concise guide to the Cable module, focusing on the Cable model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Cable

Defines the structure for cables.

```typescript
type Cable = {
  tags?: (string | Tag)[]; // default: []
  project: string | Project;
  color?: string | Color;
  cableType: string | CableType;
  boxA: string | BaseBox;
  boxB: string | BaseBox;
  ducts?: { duct: string, parent: string }[]; // default: []
  poles: { 
    id: string | BasePoint; 
    reserve: number; 
    from?: string; 
    into?: string 
  }[];
  index?: number;
  hierarchyLevel: number;
  name?: string;
  fiberNumber: number;
  looseNumber: number;
  observation?: string;
  orientationA: string;
  orientationB: string;
  implanted: boolean;
  length: number;
  altitude_length: number;
  ground_length: number;
  loss: number;
};
```

### CreateCableDTO

Defines the structure for creating a cable.

```typescript
type CreateCableDTO = {
  tags?: string[]; // default: []
  project: string;
  color?: string;
  cableType: string;
  boxA: string | CreateBoxDTO;
  boxB: string | CreateBoxDTO;
  poles: (
    | {
        id: string;
        reserve?: number;
        from?: string;
        into?: string;
      }
    | {
        lat: number;
        lng: number;
      }
  )[];
  orientationA?: string;
  orientationB?: string;
  external_id?: any;
};
```

### UpdateCableDTO

Defines the structure for updating a cable.

```typescript
type UpdateCableDTO = {
  tags?: string[];
  color?: string;
  cableType?: string;
  poles?: (
    | {
        id: string;
        reserve?: number;
        from?: string;
        into?: string;
      }
    | {
        lat: number;
        lng: number;
      }
  )[];
  orientationA?: string;
  orientationB?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Cable

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateCableDTO } from './Cable';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newCableData: CreateCableDTO = {
  project: "projectId",
  cableType: "cableTypeId",
  boxA: "boxAId",
  boxB: "boxBId",
  poles: [
    { id: "poleId1", reserve: 5 },
    { lat: 34.0522, lng: -118.2437 }
  ],
};

sdk.cable.create(newCableData).then((cable) => {
  console.log('Cable created:', cable);
});
```

### Updating a Cable

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateCableDTO } from './Cable';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateCableData: UpdateCableDTO = {
  color: "newColorId",
  orientationA: "newOrientationA",
  orientationB: "newOrientationB",
};

sdk.cable.updateById('cableId', updateCableData).then(() => {
  console.log('Cable updated');
});
```

### Fetching Cables

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cable.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Cables:', pagination);
});
```

### Fetching a Cable by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cable.findById('cableId').then((cable) => {
  console.log('Cable:', cable);
});
```

### Deleting a Cable

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cable.deleteById('cableId').then(() => {
  console.log('Cable deleted');
});
```
