# FTTHClient Module

This document provides a concise guide to the FTTHClient module, focusing on the FTTHClient model and its usage.

## Models

### FTTHClient

Defines the structure for FTTHClient entities.

```typescript
type FTTHClient = {
  _id?: string | ObjectId;
  id: string | ObjectId;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  tags: (string | ObjectId)[];
  code?: string;
  name?: string;
  observation?: string;
  implanted: boolean;
  certified: boolean;
  status: 'OK' | 'ERROR';
  cpe?: any;
  onu: {
    user_PPPoE: string;
    serial_number: string;
    mac_address: string;
  };
  kind: 'FTTHClient';
};
```

## Example Usage

### Fetching FTTHClients

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.ftthClient.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('FTTHClients:', pagination);
});
```

### Fetching a FTTHClient by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.ftthClient.findById('ftthClientId').then((ftthClient) => {
  console.log('FTTHClient:', ftthClient);
});
```
