# BoxType Module

This document provides a concise guide to the BoxType module, focusing on the BoxType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### BoxType

Defines the structure for box types.

```typescript
type BoxType = {
  code: string;
  brand?: string;
  prefix: string;
  default_template?: string;
  mold?: string;
  default_level?: number;
  default_reserve: number;
  description?: string;
  config: {
    base: {
      color: string;
    };
    regular: {
      fillColor: string;
    };
    not_implanted: {
      fillColor: string;
    };
    draft: {
      fillColor: string;
    };
  };
};
```

### CreateBoxTypeDTO

Defines the structure for creating a box type.

```typescript
type CreateBoxTypeDTO = {
  code: string;
  brand?: string;
  prefix?: string;
  default_template?: string;
  mold?: string;
  default_level?: number;
  default_reserve: number;
  description?: string;
  config: {
    base: {
      color: string;
    };
    regular: {
      fillColor: string;
    };
    not_implanted: {
      fillColor: string;
    };
    draft: {
      fillColor: string;
    };
  };
  external_id?: any;
};
```

### UpdateBoxTypeDTO

Defines the structure for updating a box type.

```typescript
type UpdateBoxTypeDTO = Partial<CreateBoxTypeDTO>;
```

## Example Usage

### Create a BoxType

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateBoxTypeDTO } from './BoxType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBoxTypeData: CreateBoxTypeDTO = {
  code: 'BT001',
  prefix: 'BX',
  default_reserve: 10,
  config: {
    base: { color: '#3388FFFF' },
    regular: { fillColor: '#3388FFFF' },
    not_implanted: { fillColor: '#FFA500A6' },
    draft: { fillColor: '#FFA500A6' },
  },
};

sdk.boxType.create(newBoxTypeData).then((boxType) => {
  console.log('BoxType created:', boxType);
});
```

### Update a BoxType

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateBoxTypeDTO } from './BoxType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBoxTypeData: UpdateBoxTypeDTO = {
  description: 'Updated description',
};

sdk.boxType.updateById('boxTypeId', updateBoxTypeData).then(() => {
  console.log('BoxType updated');
});
```
