# Battery Module

This document provides a concise guide to the Battery module, focusing on the Battery model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Battery

Defines the structure for battery.

```typescript
type Battery = {
  name: string;
  parent: string;
  shelf: string;
  draft?: boolean;
  certified?: boolean;
  implanted?: boolean;
  label?: string;
  tags?: (string | Tag)[]; // default: []
  batteryType: string;
  description?: string;
  autonomy?: string;
  fabricationDate: Date;
  serialNumber?: string;
  project?: string;
};
```

### CreateBatteryDTO

Defines the structure for creating a battery.

```typescript
type CreateBatteryDTO = Partial<Battery> & {
  external_id?: any;
};
```

### UpdateBatteryDTO

Defines the structure for updating a battery.

```typescript
type UpdateBatteryDTO = Partial<Battery> & {
  external_id?: any;
};
```

## Example Usage

### Creating a Battery

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newAnBatteryData: CreateBatteryDTO = {
  shelf: '672e495ba11f5fd8cee233e8',
  name: 'B_2',
  batteryType: '64d3c9fe851734dadced30b5',
  label: 'Rótulo',
  tags: ['672e286bd8cd3c58813a4152'],
  parent: '672e4954a11f5fd8cee232e6',
  autonomy: 1,
  serialNumber: 'Numero de Série',
  size: 1,
  fabricationDate: '2024-11-11T00:00:00',
  id: 'Battery-1',
  project: '',
};

sdk.battery.create(newBatteryData).then((battery) => {
  console.log('Battery created:', battery);
});
```

Response example

```json
{
  "label": "Rótulo",
  "attenuation": [],
  "implanted": true,
  "isDrop": false,
  "parent": "672e4954a11f5fd8cee232e6",
  "project": "5d9f3ff9200141000647f814",
  "name": "B_2",
  "size": 1,
  "shelf": "672e495ba11f5fd8cee233e8",
  "creatorData": {
    "id": "5d9f3fb8200141000647f768",
    "name": "Support OZmap",
    "username": "devoz"
  },
  "_id": "673231cb0e7b45c9658e5b34",
  "kind": "Battery",
  "tags": ["672e286bd8cd3c58813a4152"],
  "batteryType": "64d3c9fe851734dadced30b5",
  "draft": false,
  "certified": false,
  "autonomy": 1,
  "fabricationDate": "2024-11-11T00:00:00.000Z",
  "serialNumber": "Numero de Série",
  "createdAt": "2024-11-11T16:33:15.040Z",
  "updatedAt": "2024-11-11T16:33:15.040Z",
  "__v": 0,
  "id": "673231cb0e7b45c9658e5b34"
}
```

### Updating a Battery

```typescript
import OZMapSDK from 'ozmapsdk';
const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBatteryData: UpdateBatteryDTO = {
  name: 'B_30',
};

sdk.battery.updateById('batteryId', updateBatteryData).then(() => {
  console.log('Battery updated');
});
```

### Deleting a Battery

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.battery.deleteById('batteryId').then(() => {
  console.log('Battery deleted');
});
```
