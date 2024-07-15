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
Response example
```json
{
  "total": 189,
  "count": 3,
  "rows": [
    {
      "isBalanced": true,
      "orientation": "right",
      "currentPower": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "installPower": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "label": "",
      "attenuation": [
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5
      ],
      "implanted": true,
      "isDrop": true,
      "kind": "Splitter",
      "parent": "5da61e13493d9c0006665474",
      "project": "5d9f3ff9200141000647f814",
      "name": "Splitter 1",
      "splitterType": "5b74204cffd4524508626953",
      "connectables": {
        "input": [
          "5da61e45493d9c00066654aa"
        ],
        "output": [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          "5da61e4a493d9c00066654ee"
        ]
      },
      "ratio": {
        "output": 8,
        "input": 1
      },
      "createdAt": "2019-10-15T19:29:23.405Z",
      "updatedAt": "2023-01-10T11:31:49.518Z",
      "ports": [
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4cc"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4cb"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4ca"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4c9"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4c8"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4c7"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4c6"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4c5"
        }
      ],
      "id": "5da61e13493d9c0006665477"
    },
    {
      "isBalanced": true,
      "orientation": "right",
      "currentPower": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "installPower": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "label": "",
      "attenuation": [
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5
      ],
      "implanted": true,
      "isDrop": true,
      "kind": "Splitter",
      "parent": "5da61e20493d9c0006665479",
      "project": "5d9f3ff9200141000647f814",
      "name": "Splitter 1",
      "splitterType": "5b74204cffd4524508626953",
      "connectables": {
        "input": [
          "5da62455f003e81328000034"
        ],
        "output": [
          "5da6233a493d9c00066655e5",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "ratio": {
        "output": 8,
        "input": 1
      },
      "createdAt": "2019-10-15T19:29:36.115Z",
      "updatedAt": "2023-01-10T11:31:49.518Z",
      "ports": [
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d4"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d3"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d2"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d1"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d0"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4cf"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4ce"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4cd"
        }
      ],
      "id": "5da61e20493d9c000666547c"
    },
    {
      "isBalanced": true,
      "orientation": "right",
      "currentPower": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "installPower": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "label": "",
      "attenuation": [
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5,
        10.5
      ],
      "implanted": true,
      "isDrop": true,
      "kind": "Splitter",
      "parent": "5da61e26493d9c000666547e",
      "project": "5d9f3ff9200141000647f814",
      "name": "Splitter 1",
      "splitterType": "5da61085493d9c00066653f5",
      "connectables": {
        "input": [
          "5da76146f003e81206000010"
        ],
        "output": [
          "5da62496493d9c0006665613",
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      },
      "ratio": {
        "output": 8,
        "input": 1
      },
      "createdAt": "2019-10-15T19:34:21.014Z",
      "updatedAt": "2023-01-10T11:31:49.518Z",
      "ports": [
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4dc"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4db"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4da"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d9"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d8"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d7"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d6"
        },
        {
          "tags": [],
          "blocked": false,
          "id": "6630fd91a7b91a369286c4d5"
        }
      ],
      "id": "5da61f2df003e81328000011"
    }
  ],
  "start": 0,
  "limit": 3
}
```
### Fetching a splitter by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.splitter.findById('splitterId').then((splitter) => {
  console.log('splitter:', splitter);
});
```