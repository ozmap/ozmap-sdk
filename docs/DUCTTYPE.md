# DuctType Module

This document provides a concise guide to the DuctType module, focusing on the DuctType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### DuctType

Defines the structure for duct types.

```typescript
type DuctType = {
  id: string;
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  subDucts?: SubDuctStructure[];
  config: {
    regular: {
      color: string;
      weight: number;
    };
    notImplanted: {
      color: string;
      weight: number;
    };
  };
  external_id?: any;
};
```

### SubDuctStructure

Defines the structure for sub-ducts within a duct type.

```typescript
type SubDuctStructure = {
  ductType?: string | null;
  color?: string | null;
  subDucts?: SubDuctStructure[] | null;
};
```

### CreateDuctTypeDTO

Defines the structure for creating a duct type.

```typescript
type CreateDuctTypeDTO = {
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  subDucts?: SubDuctStructure[];
  config?: {
    regular?: {
      color?: string;
      weight?: number;
    };
    notImplanted?: {
      color?: string;
      weight?: number;
    };
  };
  external_id?: any;
};
```

### UpdateDuctTypeDTO

Defines the structure for updating a duct type.

```typescript
type UpdateDuctTypeDTO = {
  code?: string;
  brand?: string;
  mold?: string;
  description?: string;
  subDucts?: SubDuctStructure[];
  config?: {
    regular?: {
      color?: string;
      weight?: number;
    };
    notImplanted?: {
      color?: string;
      weight?: number;
    };
  };
  external_id?: any;
};
```

## Example Usage

### Creating a DuctType

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateDuctTypeDTO } from './DuctType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newDuctTypeData: CreateDuctTypeDTO = {
  code: "DUCT_TYPE_001",
  brand: "BrandName",
  description: "Description of the duct type",
  subDucts: [{ ductType: "subDuctTypeId", color: "colorId" }],
  config: {
    regular: { color: "#FFFFFF", weight: 10 },
    notImplanted: { color: "#CCCCCC", weight: 5 },
  },
};

sdk.ductType.create(newDuctTypeData).then((ductType) => {
  console.log('DuctType created:', ductType);
});
```

### Updating a DuctType

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateDuctTypeDTO } from './DuctType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateDuctTypeData: UpdateDuctTypeDTO = {
  brand: "UpdatedBrandName",
  description: "Updated description",
};

sdk.ductType.updateById('ductTypeId', updateDuctTypeData).then(() => {
  console.log('DuctType updated');
});
```

### Fetching DuctTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.ductType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('DuctTypes:', pagination);
});
```

### Fetching a DuctType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.ductType.findById('ductTypeId').then((ductType) => {
  console.log('DuctType:', ductType);
});
```

### Deleting a DuctType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.ductType.deleteById('ductTypeId').then(() => {
  console.log('DuctType deleted');
});
```