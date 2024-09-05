# Pendency Module

This document provides a concise guide to the Pendency module, focusing on the Pendency model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Pendency

Defines the structure for Pendencies.

```typescript
type Pendency = {
  owner: string | User;
  project: string | Project;
  pendencyType: string | PendencyType;
  color?: string;
  tags: Array<string | Tag>;
  responsibles: Array<string | User>;
  solved?: boolean;
  name?: string;
  description?: string;
  coords: [number, number];
  convertedTo?: {
    kind: string;
    element: string;
  };
};
```

### CreatePendencyDTO

Defines the structure for creating a Pendency.

```typescript
type CreatePendencyDTO = Partial<{
  owner: string;
  project: string;
  pendencyType: string;
  color?: string;
  tags: Array<string>;
  responsibles: Array<string>;
  solved?: boolean;
  name?: string;
  description?: string;
  coords: [number, number];
  external_id?: any;
}>;
```

### UpdatePendencyDTO

Defines the structure for updating a Pendency.

```typescript
type UpdatePendencyDTO = Partial<{
  owner: string;
  project: string;
  pendencyType: string;
  color?: string;
  tags: Array<string>;
  responsibles: Array<string>;
  solved?: boolean;
  name?: string;
  description?: string;
  coords: [number, number];
  external_id?: any;
}>;
```

## Example Usage

### Creating a Pendency

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPendencyData: CreatePendencyDTO = {
  owner: "userId",
  project: "projectId",
  pendencyType: "pendencyTypeId",
  coords: [10, 20],
  description: "This is a new pendency",
  name: "New Pendency",
};

sdk.pendency.create(newPendencyData).then((pendency) => {
  console.log('Pendency created:', pendency);
});
```
Response Example
```json
{
  "solved": true,
  "name": "teste-59",
  "description": "teste",
  "pendencyType": "60b7d3373dbf377d14cd4544",
  "tags": [],
  "responsibles": [
    "5c3173ee4fe3a70016d05bcd"
  ],
  "coords": [
    -48.527222871780396,
    -27.576655030562492
  ],
  "_id": "639cae468d002c0020599e5b",
  "owner": "5d9f3fb8200141000647f768",
  "project": "5d9f3ff9200141000647f814",
  "color": "5fc7a6b6f6128100133f45f2",
  "creatorData": {
    "id": "638657f1e0e378001461c35c",
    "name": "api",
    "username": "api"
  },
  "createdAt": "2022-12-16T17:43:34.605Z",
  "updatedAt": "2022-12-16T17:43:34.605Z",
  "__v": 0,
  "id": "639cae468d002c0020599e5b",
  "lng": -48.527222871780396,
  "lat": -27.576655030562492
}
```
### Updating a Pendency

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePendencyData: UpdatePendencyDTO = {
  description: "Updated description",
  solved: true,
};

sdk.pendency.updateById('pendencyId', updatePendencyData).then(() => {
  console.log('Pendency updated');
});
```

### Fetching Pendencies

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendency.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Pendencies:', pagination);
});
```

### Fetching a Pendency by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendency.findById('pendencyId').then((pendency) => {
  console.log('Pendency:', pendency);
});
```
Response example
```json
{
  "solved": false,
  "name": "UPDATE ODF POP TABOAO",
  "description": "",
  "pendencyType": "60b7d3373dbf377d14cd4544",
  "tags": [],
  "responsibles": [
    "5ebf09c59342ae000c8225d0"
  ],
  "coords": [
    -46.76937818559964,
    -23.623601640533938
  ],
  "owner": "5ebf09c59342ae000c8225d0",
  "project": "5f343ecf4390400013b0915f",
  "createdAt": "2021-11-05T15:29:19.689Z",
  "updatedAt": "2022-11-21T11:13:03.108Z",
  "id": "61854dcf61cad9001318e7b4",
  "lng": -46.76937818559964,
  "lat": -23.623601640533938
}
```

### Deleting a Pendency

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendency.deleteById('pendencyId').then(() => {
  console.log('Pendency deleted');
});
```