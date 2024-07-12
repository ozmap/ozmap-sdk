# Slot Module

This document provides a concise guide to the Slot module, focusing on the Slot model and its usage.

## Models

### Slot

Defines the structure for Slot entities.

```typescript
type Slot = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'SLOT';
  connectables: (string | null)[];
  label?: string;
  starting_pon_numbere: number;
  olt?: string;
  external_id?: any;
};
```

### CreateSlotDTO

Defines the structure for creating a new Slot.

```typescript
type CreateSlotDTO = {
  connectables?: (string | null)[];
  label?: string;
  starting_pon_numbere?: number;
  olt: string;
  external_id?: any;
};
```

### UpdateSlotDTO

Defines the structure for updating an existing Slot.

```typescript
type UpdateSlotDTO = {
  connectables?: (string | null)[];
  label?: string;
  starting_pon_numbere?: number;
  external_id?: any;
};
```

## Example Usage

### Creating a Slot

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newSlotData: CreateSlotDTO = {
  olt: 'OLT001',
  starting_pon_numbere: 1,
};

sdk.slot.create(newSlotData).then((slot) => {
  console.log('Slot created:', slot);
});
```

### Updating a Slot

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateSlotData: UpdateSlotDTO = {
  label: 'Updated Label',
};

sdk.slot.updateById('slotId', updateSlotData).then(() => {
  console.log('Slot updated');
});
```

### Deleting a Slot

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.slot.deleteById('slotId').then(() => {
  console.log('Slot deleted');
});
```
