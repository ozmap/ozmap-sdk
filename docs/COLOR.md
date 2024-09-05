# Color Module

This document provides a detailed guide to the Color module, focusing on the Color model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Color

Defines the structure for colors.

```typescript
type Color = {
  color: string;
  name: string;
};
```

### CreateColorDTO

Defines the structure for creating a color.

```typescript
type CreateColorDTO = {
  color: string;
  name: string;
};
```

### UpdateColorDTO

Defines the structure for updating a color.

```typescript
type UpdateColorDTO = Partial<CreateColorDTO>;
```

## Example Usage

### Create a Color

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateColorDTO } from './Color';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newColorData: CreateColorDTO = {
  color: '#FFFFFF',
  name: 'White',
};

sdk.color.create(newColorData).then((color) => {
  console.log('Color created:', color);
});
```

### Update a Color

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateColorDTO } from './Color';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateColorData: UpdateColorDTO = {
  name: 'Bright White',
};

sdk.color.updateById('colorId', updateColorData).then(() => {
  console.log('Color updated');
});
```

### Fetching colors

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.color.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('color:', pagination);
});
```

### Fetching a color by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.color.findById('colorId').then((color) => {
  console.log('color:', color);
});
```

### Deleting a color

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.color.deleteById('colorId').then(() => {
  console.log('color deleted');
});
```