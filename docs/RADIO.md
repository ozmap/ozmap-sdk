# Radio Module

This document provides a concise guide to the Radio module, focusing on the Radio model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Radio

Defines the structure for radio.

```typescript
type Radio = {
  radioType: string;
  name: string;
  parent: string;
  shelf: string;
  radioCapacity?: number;
  observation?: string;
  serialNumber?: string;
  macAddress?: string;
  port_labels?: string[]; // default: [],
  label?: string;
  connectables?: string[];
  tags?: (string | Tag)[]; // default: []
  configuration?: string;
  potency?: number;
  kind?: string;
  size?: number;
  implanted?: boolean;
  project?: string;
  isDrop?: boolean;
};
```

### CreateRadioDTO

Defines the structure for creating a radio.

```typescript
type CreateRadioDTO = Partial<Radio> & {
  external_id?: any;
};
```

### UpdateRadioDTO

Defines the structure for updating a radio.

```typescript
type UpdateRadioDTO = Partial<Radio> & {
  external_id?: any;
};
```

## Example Usage

### Creating a Radio

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newRadioData: CreateRadioDTO = {
  shelf: '672e495ba11f5fd8cee233e8',
  name: 'R_3',
  radioType: '64c94629d41d417900000000',
  configuration: 'Config',
  potency: '1',
  label: 'Rótulo',
  tags: ['67322d480e7b45c9658e552a'],
  parent: '672e4954a11f5fd8cee232e6',
  radioCapacity: '1',
  macAddress: 'Endereço MAC',
  size: '0',
  serialNumber: 'Número de Série',
  id: 'Radio-3',
  isDrop: false,
};

sdk.radio.create(newRadioData).then((radio) => {
  console.log('Radio created:', radio);
});
```

Response example

```json
{
  "connectables": [null, null],
  "label": "Rótulo",
  "attenuation": [],
  "implanted": true,
  "isDrop": false,
  "parent": "672e4954a11f5fd8cee232e6",
  "project": "5d9f3ff9200141000647f814",
  "name": "R_3",
  "size": 0,
  "shelf": "672e495ba11f5fd8cee233e8",
  "creatorData": {
    "id": "5d9f3fb8200141000647f768",
    "name": "Support OZmap",
    "username": "devoz"
  },
  "_id": "673230020e7b45c9658e587e",
  "kind": "Radio",
  "port_labels": ["", ""],
  "radioType": "64c94629d41d417900000000",
  "radioCapacity": 1,
  "serialNumber": "Número de Série",
  "macAddress": "Endereço MAC",
  "configuration": "Config",
  "potency": 1,
  "tags": ["67322d480e7b45c9658e552a"],
  "createdAt": "2024-11-11T16:25:38.078Z",
  "updatedAt": "2024-11-11T16:25:38.078Z",
  "__v": 0,
  "id": "673230020e7b45c9658e587e"
}
```

### Updating a Radio

```typescript
import OZMapSDK from 'ozmapsdk';
const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateRadioData: UpdateRadioDTO = {
  name: 'R_30',
};

sdk.radio.updateById('radioId', updateRadioData).then(() => {
  console.log('Radio updated');
});
```

### Deleting a Radio

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.radio.deleteById('radioId').then(() => {
  console.log('Radio deleted');
});
```
