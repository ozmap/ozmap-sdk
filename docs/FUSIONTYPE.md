# FusionType Module

This document provides a concise guide to the FusionType module, focusing on the FusionType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### FusionType

Defines the structure for fusion types.

```typescript
type FusionType = {
  code: string;
  loss: number;
  isDrop: boolean;
};
```

### CreateFusionTypeDTO

Defines the structure for creating a fusion type.

```typescript
type CreateFusionTypeDTO = {
  code: string;
  loss: number;
  isDrop: boolean;
  external_id?: any;
};
```

### UpdateFusionTypeDTO

Defines the structure for updating a fusion type.

```typescript
type UpdateFusionTypeDTO = {
  code?: string;
  loss?: number;
  isDrop?: boolean;
  external_id?: any;
};
```

## Example Usage

### Creating a Fusion Type

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateFusionTypeDTO } from './FusionType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newFusionTypeData: CreateFusionTypeDTO = {
  code: "FT001",
  loss: 0.1,
  isDrop: false,
};

sdk.fusionType.create(newFusionTypeData).then((fusionType) => {
  console.log('Fusion type created:', fusionType);
});
```

### Updating a Fusion Type

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateFusionTypeDTO } from './FusionType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateFusionTypeData: UpdateFusionTypeDTO = {
  code: "FT002",
  loss: 0.2,
};

sdk.fusionType.updateById('fusionTypeId', updateFusionTypeData).then(() => {
  console.log('Fusion type updated');
});
```

### Fetching Fusion Types

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fusionType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Fusion types:', pagination);
});
```

### Fetching a Fusion Type by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fusionType.findById('fusionTypeId').then((fusionType) => {
  console.log('Fusion type:', fusionType);
});
```

### Deleting a Fusion Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fusionType.deleteById('fusionTypeId').then(() => {
  console.log('Fusion type deleted');
});
```