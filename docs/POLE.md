# POLE Module

This document provides a concise guide to the POLE module, focusing on the Pole model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Pole

Defines the structure for poles.

```typescript
type Pole = {
  name: string;
  usable?: boolean; // default: true
  kind: 'POLE';
  observation?: string; // default: ''
  color?: string;
  poleType: string;
  address?: string;
  licensing?: {
    status?: PoleLicensingStatus; // UNKNOWN, PENDING or LICENSED. default: UNKNOWN
    protocol?: string | null;
  };
  adjacents?: (string | BasePoint)[]; // default: []
  tags?: (string | Tag)[]; // default: []
};
```

### CreatePoleDTO

Defines the structure for creating a pole.

```typescript
type CreatePoleDTO = {
  name?: string;
  usable?: boolean;
  observation?: string;
  color?: string;
  poleType?: string;
  address?: string;
  licensing?: {
    status?: PoleLicensingStatus; // UNKNOWN, PENDING or LICENSED. default: UNKNOWN
    protocol?: string | null;
  };
  adjacents?: (string | BasePoint)[];
  tags?: (string | Tag)[];
  external_id?: any;
  lat?: number;
  lng?: number;
};
```

### UpdatePoleDTO

Defines the structure for updating a pole.

```typescript
type UpdatePoleDTO = {
  name?: string;
  usable?: boolean;
  observation?: string;
  color?: string;
  poleType?: string;
  address?: string;
  licensing?: {
    status?: PoleLicensingStatus;
    protocol?: string | null;
  };
  adjacents?: (string | BasePoint)[];
  tags?: (string | Tag)[];
  external_id?: any;
  lat?: number;
  lng?: number;
};
```

## Example Usage

### Creating a Pole

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPoleData: CreatePoleDTO = {
  name: 'New Pole',
  external_id: 'externalId123',
  lat: 40.7128,
  lng: -74.006,
};

sdk.pole.create(newPoleData).then((pole) => {
  console.log('Pole created:', pole);
});
```

### Updating a Pole

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePoleData: UpdatePoleDTO = {
  name: 'Updated Pole',
  external_id: 'updatedExternalId456',
  lat: 40.7128,
  lng: -74.006,
};

sdk.pole.updateById('poleId', updatePoleData).then(() => {
  console.log('Pole updated');
});
```

### Fetching Poles

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pole.find().then((pagination) => {
  console.log('Poles:', pagination);
});
```
Response Example

```json
{
  "total": 314,
  "count": 3,
  "rows": [
    {
      "poleType": "5d7d2b3fdbc425449801709e",
      "licensing": {
        "status": 0,
        "protocol": ""
      },
      "usable": true,
      "observation": "",
      "tags": [],
      "coords": [
        -48.52695733308792,
        -27.576735865170544
      ],
      "adjacents": [
        "5da61d67493d9c0006665409",
        "5da61d8e493d9c0006665418"
      ],
      "kind": "Pole",
      "name": "P_1",
      "createdAt": "2019-10-15T19:26:31.449Z",
      "updatedAt": "2022-11-28T20:12:33.758Z",
      "id": "5da61d67493d9c0006665408",
      "lng": -48.52695733308792,
      "lat": -27.576735865170544
    },
    {
      "poleType": "5d7d2b3fdbc425449801709e",
      "licensing": {
        "status": 0,
        "protocol": ""
      },
      "usable": true,
      "observation": "",
      "tags": [],
      "coords": [
        -48.526823222637184,
        -27.576609858255573
      ],
      "adjacents": [
        "5da61d67493d9c0006665408",
        "5da61d67493d9c000666540a"
      ],
      "kind": "Pole",
      "name": "P_2",
      "createdAt": "2019-10-15T19:26:31.505Z",
      "updatedAt": "2022-11-28T20:12:33.758Z",
      "id": "5da61d67493d9c0006665409",
      "lng": -48.526823222637184,
      "lat": -27.576609858255573
    },
    {
      "poleType": "5d7d2b3fdbc425449801709e",
      "licensing": {
        "status": 0,
        "protocol": ""
      },
      "usable": true,
      "observation": "",
      "tags": [],
      "coords": [
        -48.52665692567826,
        -27.57648147370279
      ],
      "adjacents": [
        "5da61d67493d9c0006665409",
        "5da61d67493d9c000666540b"
      ],
      "kind": "Pole",
      "name": "P_3",
      "createdAt": "2019-10-15T19:26:31.530Z",
      "updatedAt": "2022-11-28T20:12:33.758Z",
      "id": "5da61d67493d9c000666540a",
      "lng": -48.52665692567826,
      "lat": -27.57648147370279
    }
  ],
  "start": 0,
  "limit": 3
}
```
### Fetching a Pole by ID

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pole.findById('poleId').then((pole) => {
  console.log('Pole:', pole);
});
```

### Deleting a Pole

```typescript
import OZMapSDK from 'OZMapSDK';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pole.deleteById('poleId').then(() => {
  console.log('Pole deleted');
});
```
