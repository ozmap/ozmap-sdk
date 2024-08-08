# Tag Module

This document provides a concise guide to the Tag module, focusing on the Tag model and its usage.

## Models

### Tag

Defines the structure for Tag entities.

```typescript
type Tag = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  name: string;
  allowedTypes: (
    | 'cable'
    | 'box'
    | 'pop'
    | 'tower'
    | 'property'
    | 'client'
    | 'building'
    | 'pole'
    | 'prospect'
    | 'post'
    | 'region'
    | 'horizontalCondominium'
    | 'pendency'
    | 'antenna'
    | 'sector'
    | 'battery'
    | 'radio'
    | 'shelf'
    | 'junctionBox'
    | 'duct'
    | 'splitter.ports'
  )[];
};
```

### CreateTagDTO

Defines the structure for creating a new Tag.

```typescript
type CreateTagDTO = {
  name: string;
  allowedTypes: (
    | 'cable'
    | 'box'
    | 'pop'
    | 'tower'
    | 'property'
    | 'client'
    | 'building'
    | 'pole'
    | 'prospect'
    | 'post'
    | 'region'
    | 'horizontalCondominium'
    | 'pendency'
    | 'antenna'
    | 'sector'
    | 'battery'
    | 'radio'
    | 'shelf'
    | 'junctionBox'
    | 'duct'
    | 'splitter.ports'
  )[];
};
```

### UpdateTagDTO

Defines the structure for updating an existing Tag.

```typescript
type UpdateTagDTO = {
  name?: string;
  allowedTypes?: (
    | 'cable'
    | 'box'
    | 'pop'
    | 'tower'
    | 'property'
    | 'client'
    | 'building'
    | 'pole'
    | 'prospect'
    | 'post'
    | 'region'
    | 'horizontalCondominium'
    | 'pendency'
    | 'antenna'
    | 'sector'
    | 'battery'
    | 'radio'
    | 'shelf'
    | 'junctionBox'
    | 'duct'
    | 'splitter.ports'
  )[];
};
```

## Example Usage

### Creating a Tag

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newTagData: CreateTagDTO = {
  name: 'Important',
  allowedTypes: ['cable', 'box'],
};

sdk.tag.create(newTagData).then((tag) => {
  console.log('Tag created:', tag);
});
```

### Updating a Tag

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateTagData: UpdateTagDTO = {
  name: 'Very Important',
};

sdk.tag.updateById('tagId', updateTagData).then(() => {
  console.log('Tag updated');
});
```

### Fetching Tags

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.tag.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Tags:', pagination);
});
```

### Fetching a Tag by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.tag.findById('tagId').then((tag) => {
  console.log('Tag:', tag);
});
```

### Deleting a Tag

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.tag.deleteById('tagId').then(() => {
  console.log('Tag deleted');
});
```
