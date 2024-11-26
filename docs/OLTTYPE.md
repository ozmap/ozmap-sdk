# OLTType Module

This document provides a concise guide to the OLTType (Optical Line Terminal Type) module, focusing on the OLTType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### OLTType

Defines the structure for OLT types.

```typescript
type OLTType = {
  code: string;
  brand: string;
  mold: string;
  defaultPotency: number;
  defaultClients?: number;
  description: string;
  size: number;
  slots: Array<{
    name: number;
    starting_pon_number: number;
    pons: number;
  }>;
};
```

### CreateOLTTypeDTO

Defines the structure for creating an OLT type.

```typescript
type CreateOLTTypeDTO = Partial<{
  code: string;
  brand: string;
  mold: string;
  defaultPotency: number;
  defaultClients?: number;
  description: string;
  size: number;
  slots: Array<{
    name: number;
    starting_pon_number: number;
    pons: number;
  }>;
  external_id?: any;
}>;
```

### UpdateOLTTypeDTO

Defines the structure for updating an OLT type.

```typescript
type UpdateOLTTypeDTO = Partial<{
  code: string;
  brand: string;
  mold: string;
  defaultPotency: number;
  defaultClients?: number;
  description: string;
  size: number;
  slots: Array<{
    name: number;
    starting_pon_number: number;
    pons: number;
  }>;
  external_id?: any;
}>;
```

## Example Usage

### Creating an OLT Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newOLTTypeData: CreateOLTTypeDTO = {
  code: "OLT-001",
  brand: "BrandX",
  mold: "MoldY",
  defaultPotency: 10,
  description: "High performance OLT",
  size: 1,
  slots: [
    { name: 1, starting_pon_number: 1, pons: 4 },
  ],
};

sdk.oltType.create(newOLTTypeData).then((oltType) => {
  console.log('OLT Type created:', oltType);
});
```

### Updating an OLT Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateOLTTypeData: UpdateOLTTypeDTO = {
  description: "Updated description",
  defaultPotency: 15,
};

sdk.oltType.updateById('oltTypeId', updateOLTTypeData).then(() => {
  console.log('OLT Type updated');
});
```

### Fetching OLT Types

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.oltType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('OLT Types:', pagination);
});
```

### Fetching an OLT Type by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.oltType.findById('oltTypeId').then((oltType) => {
  console.log('OLT Type:', oltType);
});
```

### Deleting an OLT Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.oltType.deleteById('oltTypeId').then(() => {
  console.log('OLT Type deleted');
});
```
