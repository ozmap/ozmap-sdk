# Shelf Module

This document provides a concise guide to the Shelf module, focusing on the Shelf model and its usage.

## Models

### Shelf

Defines the structure for Shelf entities.

```typescript
type Shelf = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'SHELF';
  connectables: (string | null)[][];
  tags: (string)[];
  shelfType: string | ShelfType;
};
```

### CreateShelfDTO

Defines the structure for creating a new Shelf.

```typescript
type CreateShelfDTO = {
  external_id?: any;
  attenuation?: number;
  tags?: (string)[];
  shelfType: string;
};
```

### UpdateShelfDTO

Defines the structure for updating an existing Shelf.

```typescript
type UpdateShelfDTO = {
  external_id?: any;
  attenuation?: number;
  tags?: (string)[];
  shelfType?: string;
};
```

## Example Usage

### Creating a Shelf

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newShelfData: CreateShelfDTO = {
  shelfType: 'shelfTypeId',
  tags: ['tagId1', 'tagId2'],
};

sdk.shelf.create(newShelfData).then((shelf) => {
  console.log('Shelf created:', shelf);
});
```

### Updating a Shelf

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateShelfData: UpdateShelfDTO = {
  tags: ['updatedTagId1', 'updatedTagId2'],
};

sdk.shelf.updateById('shelfId', updateShelfData).then(() => {
  console.log('Shelf updated');
});
```

### Fetching Shelves

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.shelf.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Shelves:', pagination);
});
```

### Fetching a Shelf by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.shelf.findById('shelfId').then((shelf) => {
  console.log('Shelf:', shelf);
});
```

### Deleting a Shelf

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.shelf.deleteById('shelfId').then(() => {
  console.log('Shelf deleted');
});
```
