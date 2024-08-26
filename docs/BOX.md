# Box Module

This document provides a concise guide to the Box module, focusing on the Box model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Box

Defines the structure for box.

```typescript
type Box = {
  kind: "Box";
  color?: string;
  fill_color?: string;
  name: string;
  address?: string;
  shared?: boolean; // default: false
  draft?: boolean; // default: false
  default_reserve?: number; // default: 0
  hierarchyLevel: number;
  boxType: string;
  pole: string;
  certified?: boolean; // default: false
  implanted: boolean;
  tags?: (string | Tag)[]; // default: []
  project: string | Project;
  pole: string | BasePoint;
  color?: string | Color;
  fill_color?: string | Color;
  boxType: string | BoxType;
  underground: boolean;
  cables?: string[]; // default: []
};
```

### CreateBoxDTO

Defines the structure for creating a box.

```typescript
type CreateBoxDTO = {
  kind?: "Box";
  color?: string;
  fill_color?: string;
  name?: string;
  address?: string;
  shared?: boolean; // default: false
  draft?: boolean; // default: false
  default_reserve?: number; // default: 0
  hierarchyLevel?: number;
  boxType?: string;
  pole?: string;
  certified?: boolean; // default: false
  implanted?: boolean;
  tags?: string[]; // default: []
  max_distance?: number;
  external_id?: any;
  template?: string;
};
```

### UpdateBoxDTO

Defines the structure for updating a box.

```typescript
type UpdateBoxDTO = {
  kind?: "Box";
  color?: string;
  fill_color?: string;
  name?: string;
  address?: string;
  shared?: boolean; // default: false
  draft?: boolean; // default: false
  default_reserve?: number; // default: 0
  hierarchyLevel?: number;
  boxType?: string;
  pole?: string;
  certified?: boolean; // default: false
  implanted?: boolean;
  tags?: string[]; // default: []
  external_id?: any;
};
```

## Example Usage

### Creating a Box

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBoxData: CreateBoxDTO = {
  name: "New Box",
  kind: "Box",
  hierarchyLevel: 1,
  boxType: "boxTypeId",
  pole: "poleId",
  implanted: true,
};

sdk.box.create(newBoxData).then((box) => {
  console.log('Box created:', box);
});
```
Response example
```json
{
  "shared": false,
  "draft": false,
  "default_reserve": 0,
  "certified": false,
  "_id": "63614ffe5f40a200200b9db7",
  "tags": [],
  "coords": [
    -48.527442812919624,
    -27.586604372247944
  ],
  "cables": [],
  "kind": "Box",
  "project": "5d9f3ff9200141000647f814",
  "implanted": false,
  "hierarchyLevel": 2,
  "boxType": "589ddcf07dfe452f10d7c274",
  "name": "teste",
  "creatorData": {
    "id": "635c31fe8ea52700137428a3",
    "name": "api",
    "username": "api"
  },
  "pole": "63614ffe5f40a200200b9db8",
  "createdAt": "2022-11-01T16:57:34.815Z",
  "updatedAt": "2022-11-01T16:57:34.815Z",
  "__v": 0,
  "id": "63614ffe5f40a200200b9db7",
  "lng": -48.527442812919624,
  "lat": -27.586604372247944
}
```
### Updating a Box

```typescript
import OZMapSDK from 'ozmapsdk';
const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBoxData: UpdateBoxDTO = {
  name: "Updated Box",
  hierarchyLevel: 2,
};

sdk.box.updateById('boxId', updateBoxData).then(() => {
  console.log('Box updated');
});
```

### Fetching box

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.box.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('box:', pagination);
});
```
Response example
```json
{
   "total":138,
   "count":1,
   "rows":[
      {
         "shared":false,
         "draft":false,
         "default_reserve":0,
         "certified":false,
         "tags":[
            
         ],
         "coords":[
            -48.527222871780396,
            -27.576655030562492
         ],
         "cables":[
            "5da61dd9493d9c0006665433",
            "5da61dfb493d9c000666544d"
         ],
         "kind":"Box",
         "project":"5d9f3ff9200141000647f814",
         "name":"POP - 1",
         "boxType":null,
         "hierarchyLevel":1,
         "implanted":true,
         "observation":"",
         "pole":"5da61d35493d9c0006665406",
         "history":[
            
         ],
         "createdAt":"2019-10-15T19:25:41.877Z",
         "updatedAt":"2022-08-04T19:42:07.427Z",
         "id":"5da61d35493d9c0006665404",
         "lng":-48.527222871780396,
         "lat":-27.576655030562492
      }
   ],
   "start":0,
   "limit":1
}
```
### Fetching a Box by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.box.findById('boxId').then((box) => {
  console.log('Box:', box);
});
```

### Deleting a Box

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.box.deleteById('boxId').then(() => {
  console.log('Box deleted');
});
```
