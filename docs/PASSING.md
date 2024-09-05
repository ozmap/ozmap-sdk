# Passing Module

This document provides a concise guide to the Passing module, focusing on the Passing model and its usage.

## Models

### Passing

Defines the structure for Passing entities.

```typescript
type Passing = {
  _id?: string | ObjectId;
  id: string | ObjectId;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'PASSING';
  connectables: (string | ObjectId | null)[];
};
```

## Example Usage

### Fetching Passings

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.passing.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Passings:', pagination);
});
```

### Fetching a Passing by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.passing.findById('passingId').then((passing) => {
  console.log('Passing:', passing);
});
```
