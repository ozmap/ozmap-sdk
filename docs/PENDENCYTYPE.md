# PendencyType Module

This document provides a concise guide to the PendencyType module, focusing on the PendencyType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### PendencyType

Defines the structure for PendencyTypes.

```typescript
type PendencyType = {
  name: string;
  color: string;
  description?: string;
  external_id?: string;
};
```

### CreatePendencyTypeDTO

Defines the structure for creating a PendencyType.

```typescript
type CreatePendencyTypeDTO = Partial<{
  name: string;
  color: string;
  description?: string;
  external_id?: string;
}>;
```

### UpdatePendencyTypeDTO

Defines the structure for updating a PendencyType.

```typescript
type UpdatePendencyTypeDTO = Partial<{
  name: string;
  color: string;
  description?: string;
  external_id?: string;
}>;
```

## Example Usage

### Creating a PendencyType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPendencyTypeData: CreatePendencyTypeDTO = {
  name: "New Pendency Type",
  color: "#ff0000",
  description: "Description of new pendency type",
};

sdk.pendencyType.create(newPendencyTypeData).then((pendencyType) => {
  console.log('PendencyType created:', pendencyType);
});
```

### Updating a PendencyType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePendencyTypeData: UpdatePendencyTypeDTO = {
  description: "Updated description",
  color: "#00ff00",
};

sdk.pendencyType.updateById('pendencyTypeId', updatePendencyTypeData).then(() => {
  console.log('PendencyType updated');
});
```

### Fetching PendencyTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendencyType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('PendencyTypes:', pagination);
});
```

### Fetching a PendencyType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendencyType.findById('pendencyTypeId').then((pendencyType) => {
  console.log('PendencyType:', pendencyType);
});
```

### Deleting a PendencyType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pendencyType.deleteById('pendencyTypeId').then(() => {
  console.log('PendencyType deleted');
});
```