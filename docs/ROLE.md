# Role Module

This document provides a concise guide to the Role module, focusing on the Role model and its usage.

## Models

### Role

Defines the structure for Role entities.

```typescript
type Role = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  name: string;
  actions: string[];
  defaultDropSize?: number | null;
  defaultRadius?: number | null;
};
```

## Example Usage

### Fetching Roles

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.role.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Roles:', pagination);
});
```

### Fetching a Role by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.role.findById('roleId').then((role) => {
  console.log('Role:', role);
});
```
