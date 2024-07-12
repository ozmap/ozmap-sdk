# Prospect Module

This document provides a concise guide to the Prospect module, focusing on the Prospect model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Prospect

Defines the structure for Prospect entities.

```typescript
type Prospect = {
  _id?: string;
  id: string;
  external_id?: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  tags: (string)[];
  phone?: string | null;
  code?: string | null;
  address?: string | null;
  name?: string | null;
  viable?: boolean | null;
  observation?: string | null;
  coords?: {
    lat: number;
    lng: number;
  } | null;
};
```

### CreateProspectDTO

Defines the structure for creating a Prospect.

```typescript
type CreateProspectDTO = {
  tags?: (string)[];
  phone?: string | null;
  code?: string | null;
  address?: string | null;
  name?: string | null;
  viable?: boolean | null;
  observation?: string | null;
  coords?: {
    lat: number;
    lng: number;
  } | null;
  external_id?: any;
};
```

### UpdateProspectDTO

Defines the structure for updating a Prospect.

```typescript
type UpdateProspectDTO = {
  tags?: (string)[];
  phone?: string | null;
  code?: string | null;
  address?: string | null;
  name?: string | null;
  viable?: boolean | null;
  observation?: string | null;
  coords?: {
    lat: number;
    lng: number;
  } | null;
  external_id?: any;
};
```

## Example Usage

### Creating a Prospect

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newProspectData: CreateProspectDTO = {
  name: "John Doe",
  phone: "555-1234",
  address: "123 Elm St",
};

sdk.prospect.create(newProspectData).then((prospect) => {
  console.log('Prospect created:', prospect);
});
```

### Updating a Prospect

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateProspectData: UpdateProspectDTO = {
  phone: "555-5678",
  viable: true,
};

sdk.prospect.updateById('prospectId', updateProspectData).then(() => {
  console.log('Prospect updated');
});
```

### Fetching Prospects

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.prospect.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Prospects:', pagination);
});
```

### Fetching a Prospect by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.prospect.findById('prospectId').then((prospect) => {
  console.log('Prospect:', prospect);
});
```

### Deleting a Prospect

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.prospect.deleteById('prospectId').then(() => {
  console.log('Prospect deleted');
});
```