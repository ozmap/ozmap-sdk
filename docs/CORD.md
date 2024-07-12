# Cord Module

This document provides a concise guide to the Cord module, focusing on the Cord model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Cord

Defines the structure for cords.

```typescript
type Cord = {
  id: string;
  kind: "CORD";
  parent: string | BaseBox;
  external_id?: any;
};
```

### CreateCordDTO

Defines the structure for creating a cord.

```typescript
type CreateCordDTO = {
  parent: string | BaseBox;
  external_id?: any;
};
```

### UpdateCordDTO

Defines the structure for updating a cord.

```typescript
type UpdateCordDTO = {
  external_id?: any;
};
```

## Example Usage

### Creating a Cord

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateCordDTO } from './Cord';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newCordData: CreateCordDTO = {
  parent: "baseBoxId",
};

sdk.cord.create(newCordData).then((cord) => {
  console.log('Cord created:', cord);
});
```

### Updating a Cord

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateCordDTO } from './Cord';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateCordData: UpdateCordDTO = {
  external_id: "updatedExternalId",
};

sdk.cord.updateById('cordId', updateCordData).then(() => {
  console.log('Cord updated');
});
```

### Fetching Cords

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cord.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Cords:', pagination);
});
```

### Fetching a Cord by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cord.findById('cordId').then((cord) => {
  console.log('Cord:', cord);
});
```

### Deleting a Cord

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.cord.deleteById('cordId').then(() => {
  console.log('Cord deleted');
});
```