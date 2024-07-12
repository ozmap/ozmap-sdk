# SwitchType Module

This document provides a concise guide to the SwitchType module, focusing on the SwitchType model and its usage.

## Models

### SwitchType

Defines the structure for SwitchType entities.

```typescript
type SwitchType = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  code: string;
  brand?: string | null;
  mold?: string | null;
  description?: string | null;
  ratio: number;
  isDrop: boolean;
  manageable: boolean;
  size: number;
};
```

### CreateSwitchTypeDTO

Defines the structure for creating a new SwitchType.

```typescript
type CreateSwitchTypeDTO = {
  code?: string;
  brand?: string | null;
  mold?: string | null;
  description?: string | null;
  ratio?: number;
  isDrop?: boolean;
  manageable?: boolean;
  size?: number;
  external_id?: any;
};
```

### UpdateSwitchTypeDTO

Defines the structure for updating an existing SwitchType.

```typescript
type UpdateSwitchTypeDTO = {
  code?: string;
  brand?: string | null;
  mold?: string | null;
  description?: string | null;
  ratio?: number;
  isDrop?: boolean;
  manageable?: boolean;
  size?: number;
  external_id?: any;
};
```

## Example Usage

### Creating a SwitchType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newSwitchTypeData: CreateSwitchTypeDTO = {
  code: 'SW001',
  brand: 'BrandX',
  mold: 'MoldY',
  description: 'Description here',
  ratio: 5,
  isDrop: true,
  manageable: false,
  size: 10,
};

sdk.switchType.create(newSwitchTypeData).then((switchType) => {
  console.log('SwitchType created:', switchType);
});
```

### Updating a SwitchType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateSwitchTypeData: UpdateSwitchTypeDTO = {
  description: 'Updated description',
};

sdk.switchType.updateById('switchTypeId', updateSwitchTypeData).then(() => {
  console.log('SwitchType updated');
});
```

### Deleting a SwitchType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.switchType.deleteById('switchTypeId').then(() => {
  console.log('SwitchType deleted');
});
```
