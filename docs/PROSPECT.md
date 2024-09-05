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
Response example
```json
{
  "tags": [
    "638a088b25360200206c0750",
    "638a089825360200206c0757"
  ],
  "_id": "638a09aee0e378001461eb90",
  "name": "Maria",
  "coords": [
    -48.527222871780396,
    -27.576655030562492
  ],
  "code": "150",
  "address": "Rua Das Rosas",
  "observation": "Proximo ao mercado",
  "creatorData": {
    "id": "638657f1e0e378001461c35c",
    "name": "api",
    "username": "api"
  },
  "createdAt": "2022-12-02T14:20:30.381Z",
  "updatedAt": "2022-12-02T14:20:30.381Z",
  "__v": 0,
  "id": "638a09aee0e378001461eb90"
}
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
Response example
```json
{
  "total": 0,
  "count": 0,
  "rows": [
    {
      "tags": [
        "5da61e20493d9c0006665479"
      ],
      "name": "Carlos",
      "code": "011456",
      "address": "Rua Avelar 135",
      "observation": "350 mega",
      "creatorData": {
        "id": "5da61e20493d9c0006665479",
        "name": "Admin",
        "username": "Admin"
      },
      "createdAt": "2021-01-01T12:00:00.000Z",
      "updatedAt": "2021-01-01T12:00:00.000Z",
      "id": "5da61e20493d9c0006665479"
    }
  ],
  "start": 0,
  "limit": 0
}
```
### Fetching a Prospect by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.prospect.findById('prospectId').then((prospect) => {
  console.log('Prospect:', prospect);
});
```
Response example
```json
{
  "tags": [],
  "name": "rafael",
  "creatorData": {
    "id": "638657f1e0e378001461c35c",
    "name": "api",
    "username": "api"
  },
  "createdAt": "2022-12-02T13:02:25.017Z",
  "updatedAt": "2022-12-02T13:02:25.017Z",
  "id": "6389f76125360200206c063e"
}
```
### Deleting a Prospect

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.prospect.deleteById('prospectId').then(() => {
  console.log('Prospect deleted');
});
```