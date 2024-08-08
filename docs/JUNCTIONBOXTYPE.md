# JunctionBoxType Module

## Models

### JunctionBoxType

Defines the structure for junction box types.

```typescript
type JunctionBoxType = {
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  prefix: string;
  color: string;
  systemDefault: boolean; // default: false
};
```

### CreateJunctionBoxTypeDTO

Defines the structure for creating a junction box type.

```typescript
type CreateJunctionBoxTypeDTO = {
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  prefix: string;
  color: string;
};
```

### UpdateJunctionBoxTypeDTO

Defines the structure for updating a junction box type.

```typescript
type UpdateJunctionBoxTypeDTO = {
  code?: string;
  brand?: string;
  mold?: string;
  description?: string;
  prefix?: string;
  color?: string;
};
```

## Example Usage

### Creating a Junction Box Type

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateJunctionBoxTypeDTO } from './JunctionBoxType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newJunctionBoxTypeData: CreateJunctionBoxTypeDTO = {
  code: "JBT123",
  prefix: "JBT",
  color: "red",
};

sdk.junctionBoxType.create(newJunctionBoxTypeData).then((junctionBoxType) => {
  console.log('Junction box type created:', junctionBoxType);
});
```

### Updating a Junction Box Type

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateJunctionBoxTypeDTO } from './JunctionBoxType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateJunctionBoxTypeData: UpdateJunctionBoxTypeDTO = {
  brand: "New Brand",
  color: "blue",
};

sdk.junctionBoxType.updateById('junctionBoxTypeId', updateJunctionBoxTypeData).then(() => {
  console.log('Junction box type updated');
});
```

### Fetching Junction Box Types

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.junctionBoxType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Junction box types:', pagination);
});
```

### Fetching a Junction Box Type by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.junctionBoxType.findById('junctionBoxTypeId').then((junctionBoxType) => {
  console.log('Junction box type:', junctionBoxType);
});
```

### Deleting a Junction Box Type

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.junctionBoxType.deleteById('junctionBoxTypeId').then(() => {
  console.log('Junction box type deleted');
});
```