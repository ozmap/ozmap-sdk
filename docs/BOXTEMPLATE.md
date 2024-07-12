# BoxTemplate Module

This document provides a concise guide to the BoxTemplate module, focusing on the BoxTemplate model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### BoxTemplate

Defines the structure for box templates.

```typescript
type BoxTemplate = {
  name: string;
  structure: object;
  positions: object;
  topology: object;
  description?: string;
};
```

### CreateBoxTemplateDTO

Defines the structure for creating a box template.

```typescript
type CreateBoxTemplateDTO = {
  name: string;
  structure: object;
  positions: object;
  topology: object;
  description?: string;
};
```

### UpdateBoxTemplateDTO

Defines the structure for updating a box template.

```typescript
type UpdateBoxTemplateDTO = Partial<CreateBoxTemplateDTO>;
```

## Example Usage

### Create a BoxTemplate

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateBoxTemplateDTO } from './BoxTemplate';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBoxTemplateData: CreateBoxTemplateDTO = {
  name: 'New Template',
  structure: {},
  positions: {},
  topology: {},
  description: 'A new box template',
};

sdk.boxTemplate.create(newBoxTemplateData).then((boxTemplate) => {
  console.log('BoxTemplate created:', boxTemplate);
});
```

### Update a BoxTemplate

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateBoxTemplateDTO } from './BoxTemplate';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBoxTemplateData: UpdateBoxTemplateDTO = {
  description: 'Updated description',
};

sdk.boxTemplate.updateById('boxTemplateId', updateBoxTemplateData).then(() => {
  console.log('BoxTemplate updated');
});
```

