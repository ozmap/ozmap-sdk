# Splitter Module

This document provides a concise guide to the Splitter module, focusing on the Splitter model and its usage.

## Models

### Splitter

Defines the structure for Splitter entities.

```typescript
type Splitter = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'SPLITTER';
  connectables: {
    input: (string | null)[];
    output: (string | null)[];
  };
  splitterType: string;
  observation?: string;
  name: string;
  attenuation?: number;
};
```

### CreateSplitterDTO

Defines the structure for creating a new Splitter.

```typescript
type CreateSplitterDTO = {
  connectables?: {
    input?: (string | null)[];
    output?: (string | null)[];
  };
  splitterType?: string;
  observation?: string;
  name?: string;
  external_id?: any;
};
```

### UpdateSplitterDTO

Defines the structure for updating an existing Splitter.

```typescript
type UpdateSplitterDTO = {
  connectables?: {
    input?: (string | null)[];
    output?: (string | null)[];
  };
  splitterType?: string;
  observation?: string;
  name?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Splitter

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newSplitterData: CreateSplitterDTO = {
  name: 'Splitter 001',
  splitterType: 'splitterTypeId',
  observation: 'Splitter observation',
};

sdk.splitter.create(newSplitterData).then((splitter) => {
  console.log('Splitter created:', splitter);
});
```

### Updating a Splitter

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateSplitterData: UpdateSplitterDTO = {
  observation: 'Updated observation',
};

sdk.splitter.updateById('splitterId', updateSplitterData).then(() => {
  console.log('Splitter updated');
});
```

### Deleting a Splitter

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.splitter.deleteById('splitterId').then(() => {
  console.log('Splitter deleted');
});
```

### Fetching splitters

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.splitter.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('splitter:', pagination);
});
```

### Fetching a splitter by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.splitter.findById('splitterId').then((splitter) => {
  console.log('splitter:', splitter);
});
```