# SplitterType Module

This document provides a concise guide to the SplitterType module, focusing on the SplitterType model and its usage.

## Models

### SplitterType

Defines the structure for SplitterType entities.

```typescript
type SplitterType = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  code: string;
  isDrop: boolean;
  brand?: string;
  mold?: string;
  description?: string;
  ratio: {
    input: number;
    output: number;
  };
  isBalanced: boolean;
  prefix: string;
  size: number;
  inputConnectionType: SplitterConnectionType;
  outputConnectionType: SplitterConnectionType;
  attenuation: number[];
};
```

### CreateSplitterTypeDTO

Defines the structure for creating a new SplitterType.

```typescript
type CreateSplitterTypeDTO = {
  code?: string;
  isDrop?: boolean;
  brand?: string;
  mold?: string;
  description?: string;
  ratio?: {
    input?: number;
    output?: number;
  };
  isBalanced?: boolean;
  prefix?: string;
  size?: number;
  inputConnectionType?: SplitterConnectionType;
  outputConnectionType?: SplitterConnectionType;
  attenuation?: number[];
  external_id?: any;
};
```

### UpdateSplitterTypeDTO

Defines the structure for updating an existing SplitterType.

```typescript
type UpdateSplitterTypeDTO = {
  code?: string;
  isDrop?: boolean;
  brand?: string;
  mold?: string;
  description?: string;
  ratio?: {
    input?: number;
    output?: number;
  };
  isBalanced?: boolean;
  prefix?: string;
  size?: number;
  inputConnectionType?: SplitterConnectionType;
  outputConnectionType?: SplitterConnectionType;
  attenuation?: number[];
  external_id?: any;
};
```

## Example Usage

### Creating a SplitterType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newSplitterTypeData: CreateSplitterTypeDTO = {
  code: 'ST001',
  isDrop: true,
  ratio: {
    input: 1,
    output: 4,
  },
  inputConnectionType: SplitterConnectionType.FUSION,
  outputConnectionType: SplitterConnectionType.CONNECTOR,
  attenuation: [0.1, 0.2, 0.3],
};

sdk.splitterType.create(newSplitterTypeData).then((splitterType) => {
  console.log('SplitterType created:', splitterType);
});
```

### Updating a SplitterType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateSplitterTypeData: UpdateSplitterTypeDTO = {
  description: 'Updated description',
};

sdk.splitterType.updateById('splitterTypeId', updateSplitterTypeData).then(() => {
  console.log('SplitterType updated');
});
```

### Deleting a SplitterType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.splitterType.deleteById('splitterTypeId').then(() => {
  console.log('SplitterType deleted');
});
```

### Fetching SplitterTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.SplitterType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('SplitterType:', pagination);
});
```

### Fetching a SplitterType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.SplitterType.findById('SplitterTypeId').then((SplitterType) => {
  console.log('SplitterType:', SplitterType);
});
```