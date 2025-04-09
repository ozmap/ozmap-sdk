# BuildingType Module

This document provides a concise guide to the BuildingType module, focusing on the BuildingType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### BuildingType

Defines the structure for building types.

```typescript
type BuildingType = {
  code: string;
  prefix: string;
  default_template?: string;
  description?: string;
  config: {
    implanted: {
      color: string;
    };
    not_implanted: {
      color: string;
    };
  };
};
```

### CreateBuildingTypeDTO

Defines the structure for creating a building type.

```typescript
type CreateBuildingTypeDTO = {
  code: string;
  default_template?: string;
  description?: string;
  config: {
    implanted: {
      color: string;
    };
    not_implanted: {
      color: string;
    };
  };
  external_id?: any;
};
```

### UpdateBuildingTypeDTO

Defines the structure for updating a building type.

```typescript
type UpdateBuildingTypeDTO = Partial<CreateBuildingTypeDTO>;
```

## Example Usage

### Create a BuildingType

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateBuildingTypeDTO } from './BuildingType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBuildingTypeData: CreateBuildingTypeDTO = {
  code: 'Building',
  prefix: 'B-',
  config: {
    implanted: { color: '#3388FFFF' },
    not_implanted: { color: '#FFA500A6' },
  },
};

sdk.buildingType.create(newBuildingTypeData).then((buildingType) => {
  console.log('BuildingType created:', buildingType);
});
```

### Update a BuildingType

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateBuildingTypeDTO } from './BuildingType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBuildingTypeData: UpdateBuildingTypeDTO = {
  description: 'Updated description',
};

sdk.buildingType.updateById('buildingTypeId', updateBuildingTypeData).then(() => {
  console.log('BuildingType updated');
});
```

### Fetching buildingTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.buildingType.find().then((pagination) => {
  console.log('buildingTypes:', pagination);
});
```

Response example

```json
{
  "total": 0,
  "count": 0,
  "rows": [
    {
      "config": {
        "implanted": {
          "color": "#3388FFFF"
        },
        "not_implanted": {
          "color": "#FFA500A6"
        }
      },
      "description": "Condominio",
      "prefix": "C-",
      "default_template": "5da6146f493d9c00066653f7",
      "createdAt": "2025-04-01T18:09:04.531Z",
      "updatedAt": "2025-04-01T18:09:04.531Z",
      "id": "67ec2bc0a6a57e62760f3225"
    }
  ],
  "start": 0,
  "limit": 0
}
```

### Fetching a buildingType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.buildingType.findById('buildingTypeId').then((buildingType) => {
  console.log('buildingType:', buildingType);
});
```

### Deleting a buildingType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.buildingType.deleteById('buildingTypeId').then(() => {
  console.log('buildingType deleted');
});
```
