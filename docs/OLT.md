# OLT Module

This document provides a concise guide to the OLT (Optical Line Terminal) module, focusing on the OLT model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### OLT

Defines the structure for OLTs.

```typescript
type OLT = {
  kind: 'OLT';
  connectables: Array<string | object>;
  oltType: string | object;
  label?: string;
  user?: string;
  password?: string;
  ip?: string;
  port?: number;
  shelf: string | object;
  snmp?: {
    community?: string;
    version?: string;
    filter: string;
    port: number;
    enabled: boolean;
  };
  tr069?: {
    host?: string;
    user: string;
    password: string;
    port: number;
    enabled: boolean;
  };
};
```

### CreateOLTDTO

Defines the structure for creating an OLT.

```typescript
type CreateOLTDTO = {
  label?: string;
  user?: string;
  password?: string;
  ip?: string;
  port?: number;
  shelf: string | object;
  snmp?: {
    community?: string;
    version?: string;
    filter: string;
    port: number;
    enabled: boolean;
  };
  tr069?: {
    host?: string;
    user: string;
    password: string;
    port: number;
    enabled: boolean;
  };
  external_id?: any;
};
```

### UpdateOLTDTO

Defines the structure for updating an OLT.

```typescript
type UpdateOLTDTO = {
  label?: string;
  user?: string;
  password?: string;
  ip?: string;
  port?: number;
  shelf?: string | object;
  snmp?: {
    community?: string;
    version?: string;
    filter?: string;
    port?: number;
    enabled?: boolean;
  };
  tr069?: {
    host?: string;
    user?: string;
    password?: string;
    port?: number;
    enabled?: boolean;
  };
  external_id?: any;
};
```

## Example Usage

### Creating an OLT

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newOLTData: CreateOLTDTO = {
  label: "OLT1",
  shelf: "shelfId",
  tr069: {
    user: "user",
    password: "password",
    port: 7547,
    enabled: true,
  },
};

sdk.olt.create(newOLTData).then((olt) => {
  console.log('OLT created:', olt);
});
```

### Updating an OLT

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateOLTData: UpdateOLTDTO = {
  label: "Updated OLT",
  ip: "192.168.1.1",
};

sdk.olt.updateById('oltId', updateOLTData).then(() => {
  console.log('OLT updated');
});
```

### Fetching OLTs

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.olt.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('OLTs:', pagination);
});
```

### Fetching an OLT by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.olt.findById('oltId').then((olt) => {
  console.log('OLT:', olt);
});
```

### Deleting an OLT

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.olt.deleteById('oltId').then(() => {
  console.log('OLT deleted');
});
```