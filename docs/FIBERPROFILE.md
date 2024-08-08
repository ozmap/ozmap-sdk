# FiberProfile Module

This document provides a concise guide to the FiberProfile module, focusing on the FiberProfile model and its Data Transfer Objects (DTOs) for create and update operations.

## Models

### FiberProfile

Defines the structure for a fiber profile.

```typescript
type FiberProfile = {
  id: string;
  name: string;
  defaultFiberColor: string;
  defaultTubeColor: string;
  fibers: { color: string }[];
  tubes: { color: string }[];
  external_id?: any;
};
```

### CreateFiberProfileDTO

Defines the structure for creating a fiber profile.

```typescript
type CreateFiberProfileDTO = {
  name?: string;
  defaultFiberColor?: string;
  defaultTubeColor?: string;
  fibers?: { color: string }[];
  tubes?: { color: string }[];
  external_id?: any;
};
```

### UpdateFiberProfileDTO

Defines the structure for updating a fiber profile.

```typescript
type UpdateFiberProfileDTO = {
  name?: string;
  defaultFiberColor?: string;
  defaultTubeColor?: string;
  fibers?: { color: string }[];
  tubes?: { color: string }[];
  external_id?: any;
};
```

## Example Usage

### Creating a FiberProfile

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateFiberProfileDTO } from './FiberProfile';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const createFiberProfileData: CreateFiberProfileDTO = {
  name: 'New Fiber Profile',
  defaultFiberColor: 'blue',
  defaultTubeColor: 'green',
  fibers: [{ color: 'red' }, { color: 'blue' }],
  tubes: [{ color: 'yellow' }, { color: 'orange' }],
};

sdk.fiberProfile.create(createFiberProfileData).then((fiberProfile) => {
  console.log('FiberProfile created:', fiberProfile);
});
```

### Updating a FiberProfile

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateFiberProfileDTO } from './FiberProfile';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateFiberProfileData: UpdateFiberProfileDTO = {
  defaultFiberColor: 'green',
};

sdk.fiberProfile.updateById('fiberProfileId', updateFiberProfileData).then(() => {
  console.log('FiberProfile updated');
});
```

### Fetching FiberProfiles

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fiberProfile.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('FiberProfiles:', pagination);
});
```

### Fetching a FiberProfile by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fiberProfile.findById('fiberProfileId').then((fiberProfile) => {
  console.log('FiberProfile:', fiberProfile);
});
```

### Deleting a FiberProfile

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.fiberProfile.deleteById('fiberProfileId').then(() => {
  console.log('FiberProfile deleted');
});
```