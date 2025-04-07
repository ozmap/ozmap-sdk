# Building Module

This document provides a concise guide to the CableStub module, focusing on the CableStub model

## Models

### Building

Defines the structure for cableStubs.

```typescript
import { CableStub } from './CableStub';

type CableStub = {
  kind: 'CableStub';
  project: string | Project;
  coords: [number, number];
  cables?: string[]; // default: []
  pole?: string;
  coords: [number, number];
};
```

## Example Usage

### Fetching CableStubs

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.building.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('CableStubs:', pagination);
});
```

### Fetching a CableStub by ID

```typescript
import OZMapSDK from 'ozmapsdk';
import cableStub from './CableStub';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.building.findById('cableStubId').then((building) => {
  console.log('CableStub:', cableStub);
});
```

```

```
