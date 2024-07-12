# Fusion Module

This document provides a concise guide to the Fusion module, focusing on the Fusion model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Fusion

Defines the structure for fusions.

```typescript
type Fusion = {
  kind: "Fusion";
  connectables: (string | null)[];
  fusionType: string | FusionType;
};
```

### CreateFusionDTO

Defines the structure for creating a fusion.

```typescript
type CreateFusionDTO = {
  kind?: "Fusion";
  connectables?: (string | null)[];
  fusionType: string;
  external_id?: any;
};
```

### UpdateFusionDTO

Defines the structure for updating a fusion.

```typescript
type UpdateFusionDTO = {
  kind?: "Fusion";
  connectables?: (string | null)[];
  fusionType?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Fusion

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateFusionDTO } from './Fusion';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newFusionData: CreateFusionDTO = {
  fusionType: "fusionTypeId",
};

sdk.fusion.create(newFusionData).then((fusion) => {
  console.log('Fusion created:', fusion);
});
```

### Updating a Fusion

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateFusionDTO } from './Fusion';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateFusionData: UpdateFusionDTO = {
  fusionType: "newFusionTypeId",
};

sdk.fusion.updateById('fusionId', updateFusionData).then(() => {
  console.log('Fusion updated');
});
```

### Fetching Fusions

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fusion.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Fusions:', pagination);
});
```

### Fetching a Fusion by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fusion.findById('fusionId').then((fusion) => {
  console.log('Fusion:', fusion);
});
```

### Deleting a Fusion

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fusion.deleteById('fusionId').then(() => {
  console.log('Fusion deleted');
});
```
