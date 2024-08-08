# DIOType Module

This document provides a concise guide to the DIOType module, focusing on the DIOType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### DIOType

Defines the structure for DIO types.

```typescript
type DIOType = {
  id: string;
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  ratio: number;
  prefix: string;
  size: number;
  loss?: number;
  tray_number: number;
  input_label: string;
  output_label: string;
  external_id?: any;
};
```

### CreateDIOTypeDTO

Defines the structure for creating a DIO type.

```typescript
type CreateDIOTypeDTO = {
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  ratio: number;
  prefix?: string;
  size?: number;
  loss?: number;
  tray_number: number;
  input_label?: string;
  output_label?: string;
  external_id?: any;
};
```

### UpdateDIOTypeDTO

Defines the structure for updating a DIO type.

```typescript
type UpdateDIOTypeDTO = {
  code?: string;
  brand?: string;
  mold?: string;
  description?: string;
  ratio?: number;
  prefix?: string;
  size?: number;
  loss?: number;
  tray_number?: number;
  input_label?: string;
  output_label?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a DIOType

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateDIOTypeDTO } from './DIOType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newDIOTypeData: CreateDIOTypeDTO = {
  code: "DIO001",
  ratio: 2,
  tray_number: 5,
};

sdk.dioType.create(newDIOTypeData).then((dioType) => {
  console.log('DIOType created:', dioType);
});
```

### Updating a DIOType

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateDIOTypeDTO } from './DIOType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateDIOTypeData: UpdateDIOTypeDTO = {
  description: "Updated description",
};

sdk.dioType.updateById('dioTypeId', updateDIOTypeData).then(() => {
  console.log('DIOType updated');
});
```

### Fetching DIOTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.dioType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('DIOTypes:', pagination);
});
```

### Fetching a DIOType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.dioType.findById('dioTypeId').then((dioType) => {
  console.log('DIOType:', dioType);
});
```

### Deleting a DIOType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.dioType.deleteById('dioTypeId').then(() => {
  console.log('DIOType deleted');
});
```

