# Property Module

This document provides a concise guide to the Property module, focusing on the Property model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Property

Defines the structure for Property entities.

```typescript
type Property = {
  _id?: string;
  id: string;
  external_id?: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'property';
  parent?: {
    id: string | Building;
  };
  address?: string;
  box?: string | Box;
  pole?: string | BasePoint;
  observation?: string;
  potencyRead?: number;
  client?: string | FTTHClient;
  drop?: string | Cable;
  tags: (string | Tag)[];
  project: string | Project;
};
```

### CreatePropertyDTO

Defines the structure for creating a Property.

```typescript
type CreatePropertyDTO = {
  kind?: 'property';
  parent?: {
    id: string;
  };
  address?: string | null;
  box?: string | null;
  pole?: string | null;
  observation?: string | null;
  potencyRead?: number | null;
  client?: string | CreateFTTHClientDTO | null;
  drop?: string | null;
  tags?: (string)[];
  project?: string;
  external_id?: any;
};
```

### UpdatePropertyDTO

Defines the structure for updating a Property.

```typescript
type UpdatePropertyDTO = {
  kind?: 'property';
  parent?: {
    id: string;
  };
  address?: string | null;
  box?: string | null;
  pole?: string | null;
  observation?: string | null;
  potencyRead?: number | null;
  client?: string | CreateFTTHClientDTO | null;
  drop?: string |  null;
  tags?: (string)[];
  project?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Property

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPropertyData: CreatePropertyDTO = {
  address: "123 Main St",
  client: "clientId",
  pole: "poleId",
};

sdk.property.create(newPropertyData).then((property) => {
  console.log('Property created:', property);
});
```
Response Example
```json
{
  "observation": "Imóvel novo",
  "drop": null,
  "tags": [],
  "cables": [],
  "kind": "Property",
  "address": "Rua das Orquideas, 258",
  "coords": [
    -48.50243926048279,
    -27.59561149230905
  ],
  "project": "5d9f3ff9200141000647f814",
  "client": "6390ba3be0e3780014620fdb",
  "creatorData": {
    "id": "638657f1e0e378001461c35c",
    "name": "api",
    "username": "api"
  },
  "history": {
    "clients": [
      {
        "id": "6390ba3be0e3780014620fdb",
        "code": "3066",
        "enter_date": "2022-12-07T16:07:23.649Z",
        "exit_date": null
      }
    ]
  },
  "createdAt": "2022-12-07T16:07:23.652Z",
  "updatedAt": "2022-12-07T16:07:23.652Z",
  "id": "6390ba3be0e3780014620fde",
  "lng": -48.50243926048279,
  "lat": -27.59561149230905
}
```

### Updating a Property

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePropertyData: UpdatePropertyDTO = {
  address: "456 Elm St",
};

sdk.property.updateById('propertyId', updatePropertyData).then(() => {
  console.log('Property updated');
});
```

### Fetching Properties

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.property.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Properties:', pagination);
});
```
Response example

```json
{
  "total": 48,
  "count": 3,
  "rows": [
    {
      "history": {
        "clients": [
          {
            "id": "5da622d3493d9c00066655d7",
            "code": "9560",
            "enter_date": null,
            "exit_date": "2022-11-29T12:29:00.094Z"
          }
        ]
      },
      "observation": "",
      "drop": "5da622d3493d9c00066655da",
      "tags": [],
      "cables": [
        "5da622d3493d9c00066655da"
      ],
      "kind": "Property",
      "coords": [
        -48.5273489356041,
        -27.57858553492696
      ],
      "address": "R. Delminda Silveira, 900 - Agronômica",
      "box": "5da62201493d9c00066655b8",
      "project": "5d9f3ff9200141000647f814",
      "pole": "5da62201493d9c00066655b1",
      "createdAt": "2019-10-15T19:49:39.777Z",
      "updatedAt": "2022-11-29T12:29:01.386Z",
      "client": null,
      "id": "5da622d3493d9c00066655d9",
      "lng": -48.5273489356041,
      "lat": -27.57858553492696,
      "connections": [
        {
          "id": "5da6220df003e8132800001e",
          "kind": "Splitter",
          "port": 1,
          "name": "Splitter 1",
          "implanted": true,
          "fiber": "5da622d3493d9c00066655db"
        }
      ]
    },
    {
      "history": {
        "clients": []
      },
      "observation": "",
      "drop": "5da6233a493d9c00066655e4",
      "tags": [],
      "cables": [
        "5da6233a493d9c00066655e4"
      ],
      "kind": "Property",
      "coords": [
        -48.52672934532166,
        -27.578773353119466
      ],
      "address": "R. Delminda Silveira, 960 - Agronômica, Florianópolis - SC, 88025-260",
      "client": null,
      "pole": "5da62307493d9c00066655df",
      "box": "5da61e20493d9c0006665479",
      "project": "5d9f3ff9200141000647f814",
      "createdAt": "2019-10-15T19:51:03.604Z",
      "updatedAt": "2022-11-28T20:12:33.759Z",
      "id": "5da62327493d9c00066655e3",
      "lng": -48.52672934532166,
      "lat": -27.578773353119466,
      "connections": [
        {
          "id": "5da61e20493d9c000666547c",
          "kind": "Splitter",
          "port": 1,
          "name": "Splitter 1",
          "implanted": true,
          "fiber": "5da6233a493d9c00066655e5"
        }
      ]
    },
    {
      "history": {
        "clients": [
          {
            "id": "5da62434493d9c00066655ff",
            "code": "4680",
            "enter_date": null,
            "exit_date": null
          }
        ]
      },
      "observation": "",
      "drop": "5da62425f003e8132800002c",
      "tags": [],
      "cables": [
        "5da62425f003e8132800002c"
      ],
      "kind": "Property",
      "address": "",
      "name": "",
      "client": {
        "tags": [],
        "observation": "",
        "implanted": true,
        "onu": {
          "user_PPPoE": "",
          "serial_number": "",
          "mac_address": ""
        },
        "certified": false,
        "status": 0,
        "kind": "ftth",
        "code": "4680",
        "createdAt": "2019-10-15T19:55:32.426Z",
        "updatedAt": "2022-11-28T20:12:33.752Z",
        "id": "5da62434493d9c00066655ff"
      },
      "project": "5d9f3ff9200141000647f814",
      "box": "5da62357493d9c00066655f1",
      "parent": "5da62357493d9c00066655f1",
      "createdAt": "2019-10-15T19:55:32.441Z",
      "updatedAt": "2022-11-28T20:12:33.759Z",
      "id": "5da62434493d9c00066655fa",
      "lng": null,
      "lat": null,
      "connections": [
        {
          "id": "5da6241af003e8132800002a",
          "kind": "Splitter",
          "port": 1,
          "name": "Splitter 1",
          "implanted": true,
          "fiber": "5da62434493d9c0006665607"
        }
      ]
    }
  ],
  "start": 0,
  "limit": 3
}
```
### Fetching a Property by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.property.findById('propertyId').then((property) => {
  console.log('Property:', property);
});
```

### Deleting a Property

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.property.deleteById('propertyId').then(() => {
  console.log('Property deleted');
});
```

## 