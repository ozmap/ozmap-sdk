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
  "total": 22,
  "count": 22,
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
    },
    {
      "description": "",
      "color": "#ff00d8",
      "name": "CLARO",
      "createdAt": "2022-05-02T14:00:11.014Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "626fe3eb54bfdf001faec13e"
    },
    {
      "description": "",
      "color": "#ff9c00",
      "name": "AZZA",
      "createdAt": "2022-05-02T14:00:35.229Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "626fe4033445540013fe2f60"
    },
    {
      "description": "",
      "color": "#ffdd00",
      "name": "DESKTOP",
      "createdAt": "2022-05-02T14:04:11.689Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "626fe4db3445540013fe3554"
    },
    {
      "description": "",
      "color": "#00ffea",
      "name": "POMBO NET",
      "createdAt": "2022-05-02T14:04:40.902Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "626fe4f854bfdf001faec78a"
    },
    {
      "description": "",
      "color": "#0f0f0e",
      "name": "OUTROS",
      "createdAt": "2022-05-02T22:22:48.140Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "627059b854bfdf001faf283f"
    },
    {
      "description": "",
      "color": "#ad00ff",
      "name": "CONNECT LINK",
      "createdAt": "2022-05-04T11:45:19.159Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6272674f4d8b8400231ba7d5"
    },
    {
      "description": "",
      "color": "#00f97d",
      "name": "SEM REDE",
      "createdAt": "2022-05-04T11:46:14.542Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "62726786fea723001705e469"
    },
    {
      "description": "",
      "color": "#ffdd00",
      "name": "MASTER NET",
      "createdAt": "2022-05-04T11:48:02.444Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "627267f24d8b8400231ba7ed"
    },
    {
      "description": "",
      "color": "#5d551d",
      "name": "AIPEER",
      "createdAt": "2022-05-04T11:48:26.072Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6272680a4d8b8400231ba7f5"
    },
    {
      "description": "",
      "color": "#0062ff",
      "name": "TIM",
      "createdAt": "2022-05-04T17:54:46.355Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6272bde64d8b8400231bf86a"
    },
    {
      "description": "",
      "color": "#b3481d",
      "name": "2- CTO SEM IDENTIFICAÇÃO",
      "createdAt": "2022-05-04T17:55:04.686Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6272bdf8fea72300170634ab"
    },
    {
      "description": "",
      "color": "#ffdd00",
      "name": "ARKATEL",
      "createdAt": "2022-05-11T11:43:39.878Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "627ba16b3bf1f6001fa7c472"
    },
    {
      "description": "",
      "color": "#ffdd00",
      "name": "SMARTFORT",
      "createdAt": "2022-05-11T11:43:46.489Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "627ba172ef5ff8001302e623"
    },
    {
      "description": "",
      "color": "#ff004e",
      "name": "3- RESERVA DE CABO",
      "createdAt": "2022-08-31T14:11:04.801Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "630f6bf8684aac00130b4c48"
    },
    {
      "description": "",
      "color": "#ff0031",
      "name": "1- CAIXA SEM ACABAMENTO",
      "createdAt": "2022-09-26T13:54:04.165Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6331aefcfd97300013e58390"
    },
    {
      "description": "",
      "color": "#ffdd00",
      "name": "4- CAIXA ACRESCENTADA",
      "createdAt": "2022-09-26T13:55:09.023Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6331af3d18c82d001f826009"
    },
    {
      "description": "incluir poste na rede",
      "color": "#ffdd00",
      "name": "5 - INCLUIR POSTE",
      "createdAt": "2022-10-21T15:10:33.780Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6352b66993a6800024a5facd"
    },
    {
      "description": "EXCLUIR POSTE DA REDE",
      "color": "#ffdd00",
      "name": "6- EXCLUIR POSTE",
      "createdAt": "2022-10-21T15:10:51.246Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "6352b67b93a6800024a5fad3"
    },
    {
      "description": "",
      "color": "#ffdd00",
      "name": "7- INCLUIR CTO REDE ANTIGA",
      "createdAt": "2022-10-26T14:08:05.276Z",
      "updatedAt": "2022-11-21T11:13:03.108Z",
      "id": "63593f459f54c800182826e0"
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