# Fiber Module

This document provides a concise guide to the Fiber module, focusing on the Fiber model and its Data Transfer Objects (DTOs) for update operations.

## Models

### Fiber

Defines the structure for fiber.

```typescript
type Fiber = {
  id: string;
  kind: NetworkConnectableKind;
  isDrop: boolean;
  fiberNumber: number;
  parent: string | Cable;
  external_id?: any;
};
```

### UpdateFiberDTO

Defines the structure for updating a fiber.

```typescript
type UpdateFiberDTO = {
  isDrop?: boolean;
  external_id?: any;
};
```

## Example Usage

### Updating a Fiber

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateFiberDTO } from './Fiber';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateFiberData: UpdateFiberDTO = {
  isDrop: true,
  external_id: 'someExternalId',
};

sdk.fiber.updateById('fiberId', updateFiberData).then(() => {
  console.log('Fiber updated');
});
```

### Fetching Fibers

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fiber.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Fibers:', pagination);
});
```

### Fetching a Fiber by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fiber.findById('fiberId').then((fiber) => {
  console.log('Fiber:', fiber);
});
```

### Deleting a Fiber

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fiber.deleteById('fiberId').then(() => {
  console.log('Fiber deleted');
});
```