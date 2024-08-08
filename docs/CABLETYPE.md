# CableType Module

This document provides a detailed guide to the CableType module, focusing on the CableType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### CableType

Defines the structure for cable types.

```typescript
type CableType = {
  code: string;
  brand?: string;
  mold?: string;
  default_level: number;
  description?: string;
  config: {
    regular: {
      color: string;
      weight: number;
    };
    not_implanted: {
      color: string;
      weight: number;
    };
  };
  fiberProfile: string;
  fiberNumber: number;
  looseNumber: number;
  base_loss: number;
};
```

### CreateCableTypeDTO

Defines the structure for creating a cable type.

```typescript
type CreateCableTypeDTO = {
  code: string;
  brand?: string;
  mold?: string;
  default_level: number;
  description?: string;
  config: {
    regular: {
      color: string;
      weight: number;
    };
    not_implanted: {
      color: string;
      weight: number;
    };
  };
  fiberProfile: string;
  fiberNumber: number;
  looseNumber: number;
  base_loss: number;
  external_id?: any;
};
```

### UpdateCableTypeDTO

Defines the structure for updating a cable type.

```typescript
type UpdateCableTypeDTO = Partial<CreateCableTypeDTO>;
```

## Example Usage

### Create a CableType

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateCableTypeDTO } from './CableType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newCableTypeData: CreateCableTypeDTO = {
  code: 'CT001',
  default_level: 1,
  config: {
    regular: { color: '#3388FFFF', weight: 6 },
    not_implanted: { color: '#FFA500A6', weight: 6 },
  },
  fiberProfile: 'fiberProfileId',
  fiberNumber: 12,
  looseNumber: 4,
  base_loss: 0.35,
};

sdk.cableType.create(newCableTypeData).then((cableType) => {
  console.log('CableType created:', cableType);
});
```

### Update a CableType

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateCableTypeDTO } from './CableType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateCableTypeData: UpdateCableTypeDTO = {
  description: 'Updated description',
};

sdk.cableType.updateById('cableTypeId', updateCableTypeData).then(() => {
  console.log('CableType updated');
});
```
### Fetching cableTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cableType.find().then((pagination) => {
  console.log('cableType:', pagination);
});
```

### Fetching a cableType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cableType.findById('cableTypeId').then((cableType) => {
  console.log('cableType:', cableType);
});
```

### Deleting a cableType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cableType.deleteById('cableTypeId').then(() => {
  console.log('cableType deleted');
});
```