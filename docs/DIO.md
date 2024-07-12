# DIO Module

This document provides a concise guide to the DIO module, focusing on the DIO model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### DIO

Defines the structure for DIOs.

```typescript
type DIO = {
  id: string;
  kind: "DIO";
  connectables: {
    input: (string | null)[];
    output: (string | null)[];
  };
  dioType: string | DIOType;
  observation?: string;
  name: string;
  tray_number: number;
  port_labels: string[];
  tray_labels: string[];
  input_label: string[];
  output_label: string[];
  external_id?: any;
  shelf?: string | NetworkConnector;
};
```

### CreateDIODTO

Defines the structure for creating a DIO.

```typescript
type CreateDIODTO = {
  dioType: string;
  observation?: string;
  name: string;
  external_id?: any;
};
```

### UpdateDIODTO

Defines the structure for updating a DIO.

```typescript
type UpdateDIODTO = {
  dioType?: string;
  observation?: string;
  name?: string;
  tray_number?: number;
  port_labels?: string[];
  tray_labels?: string[];
  input_label?: string[];
  output_label?: string[];
  external_id?: any;
  shelf?: string;
};
```

## Example Usage

### Creating a DIO

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateDIODTO } from './DIO';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newDIOData: CreateDIODTO = {
  dioType: "dioTypeId",
  name: "New DIO",
};

sdk.dio.create(newDIOData).then((dio) => {
  console.log('DIO created:', dio);
});
```

### Updating a DIO

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateDIODTO } from './DIO';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateDIOData: UpdateDIODTO = {
  observation: "Updated observation",
  name: "Updated DIO",
};

sdk.dio.updateById('dioId', updateDIOData).then(() => {
  console.log('DIO updated');
});
```

### Fetching DIOs

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.dio.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('DIOs:', pagination);
});
```

### Fetching a DIO by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.dio.findById('dioId').then((dio) => {
  console.log('DIO:', dio);
});
```

### Deleting a DIO

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.dio.deleteById('dioId').then(() => {
  console.log('DIO deleted');
});
```

