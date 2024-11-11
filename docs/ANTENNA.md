# Antenna Module

This document provides a concise guide to the Antenna module, focusing on the Antenna model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Antenna

Defines the structure for antenna.

```typescript
type Antenna = {
  antennaType: string;
  name: string;
  parent?: string;
  azymuth: number;
  angle: number;
  link?: string; // default: null
  tilt: number;
  observation?: string; // default: ''
  label?: string; // default: ''
  tags?: (string | Tag)[]; // default: []
  height: number;
  diversity?: boolean; // default: false
  implanted?: boolean; // default: false
  tower?: string;
};
```

### CreateAntennaDTO

Defines the structure for creating a antenna.

```typescript
type CreateAntennaDTO = Partial<Antenna> & {
  external_id?: any;
};
```

### UpdateAntennaDTO

Defines the structure for updating a antenna.

```typescript
type UpdateAntennaDTO = Partial<Antenna> & {
  external_id?: any;
};
```

## Example Usage

### Creating an Antenna

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newAntennaData: CreateAntennaDTO = {
  antennaType: '64d3c9f714423279548f53c9',
  name: 'A_3',
  tags: ['67321e620e7b45c9658e3b7c'],
  label: 'Rotulo',
  height: 1,
  tilt: 1,
  azymuth: 1,
  angle: 1,
  tower: '67321eeb0e7b45c9658e4001',
  link: '673218da0e7b45c9658e2e2e',
  implanted: true,
  diversity: true,
  observation: 'Observação',
  parent: '67321edf0e7b45c9658e3f14',
  id: 'Antenna-6',
};

sdk.antenna.create(newAntennaData).then((antenna) => {
  console.log('Antenna created:', antenna);
});
```

Response example

```json
{
  "label": "Rotulo",
  "attenuation": [],
  "implanted": true,
  "isDrop": false,
  "parent": "67321edf0e7b45c9658e3f14",
  "project": "5d9f3ff9200141000647f814",
  "observation": "Observação",
  "name": "A_3",
  "creatorData": {
    "id": "5d9f3fb8200141000647f768",
    "name": "Support OZmap",
    "username": "devoz"
  },
  "_id": "673221400e7b45c9658e460d",
  "kind": "Antenna",
  "antennaType": "64d3c9f714423279548f53c9",
  "azymuth": 1,
  "angle": 1,
  "link": "673218da0e7b45c9658e2e2e",
  "tilt": 1,
  "tags": ["67321e620e7b45c9658e3b7c"],
  "height": 1,
  "diversity": true,
  "createdAt": "2024-11-11T15:22:40.660Z",
  "updatedAt": "2024-11-11T15:22:40.660Z",
  "__v": 0,
  "id": "673221400e7b45c9658e460d"
}
```

### Updating an Antenna

```typescript
import OZMapSDK from 'ozmapsdk';
const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateAntennaData: UpdateAntennaDTO = {
  name: 'A_30',
};

sdk.antenna.updateById('antennaId', updateAntennaData).then(() => {
  console.log('Antenna updated');
});
```
