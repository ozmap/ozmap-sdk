# PendencyType Module

This document provides a concise guide to the PendencyType module, focusing on the PendencyType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### PendencyType

Defines the structure for PendencyTypes.

```typescript
type PendencyType = {
  name: string;
  color: string;
  description?: string;
  external_id?: string;
};
```

### CreatePendencyTypeDTO

Defines the structure for creating a PendencyType.

```typescript
type CreatePendencyTypeDTO = Partial<{
  name: string;
  color: string;
  description?: string;
  external_id?: string;
}>;
```

### UpdatePendencyTypeDTO

Defines the structure for updating a PendencyType.

```typescript
type UpdatePendencyTypeDTO = Partial<{
  name: string;
  color: string;
  description?: string;
  external_id?: string;
}>;
```

## Example Usage

### Creating a PendencyType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPendencyTypeData: CreatePendencyTypeDTO = {
  name: "New Pendency Type",
  color: "#ff0000",
  description: "Description of new pendency type",
};

sdk.pendencyType.create(newPendencyTypeData).then((pendencyType) => {
  console.log('PendencyType created:', pendencyType);
});
```
Response example
```json
{
  "description": "This is a descriptions example",
  "color": "#000000",
  "_id": "638a0a84e0e378001461eb9e",
  "name": "Type 1",
  "creatorData": {
    "id": "638657f1e0e378001461c35c",
    "name": "api",
    "username": "api"
  },
  "createdAt": "2022-12-02T14:24:04.125Z",
  "updatedAt": "2022-12-02T14:24:04.125Z",
  "__v": 0,
  "id": "638a0a84e0e378001461eb9e"
}
```
### Updating a PendencyType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePendencyTypeData: UpdatePendencyTypeDTO = {
  description: "Updated description",
  color: "#00ff00",
};

sdk.pendencyType.updateById('pendencyTypeId', updatePendencyTypeData).then(() => {
  console.log('PendencyType updated');
});
```

### Fetching PendencyTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendencyType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('PendencyTypes:', pagination);
});
```
Response example
```json
{
  "total": 3,
  "count": 3,
  "rows": [
    {
      "description": "Comum",
      "color": "#ffdd00",
      "name": "Comum",
      "createdAt": "2021-11-05T03:24:46.214Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "60b7d3373dbf377d14cd4544"
    },
    {
      "description": "",
      "color": "#00ff06",
      "name": "VIVO",
      "createdAt": "2022-05-02T13:59:24.000Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "626fe3bb54bfdf001faec12b"
    },
    {
      "description": "",
      "color": "#4800ff",
      "name": "ZAAZ",
      "createdAt": "2022-05-02T13:59:44.141Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "626fe3d054bfdf001faec130"
    }
  ],
  "start": 0,
  "limit": 25
}
```
### Fetching a PendencyType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendencyType.findById('pendencyTypeId').then((pendencyType) => {
  console.log('PendencyType:', pendencyType);
});
```
Response example
```json
{
  "description": "Common",
  "color": "#ffdd00",
  "name": "Common",
  "createdAt": "2021-11-05T03:24:46.214Z",
  "updatedAt": "2022-11-21T11:13:03.108Z",
  "id": "60b7d3373dbf377d14cd4544"
}
```

### Deleting a PendencyType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendencyType.deleteById('pendencyTypeId').then(() => {
  console.log('PendencyType deleted');
});
```