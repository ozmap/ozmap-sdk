# PopType Module
## Models

### PopType

Defines the structure for PopType entities.

```typescript
type PopType = {
  _id?: string;
  id: string;
  external_id?: string;
  creatorData?: {
    id: string;
    name: string;
    username: string;
  };
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  code: string;
  prefix: string;
  hierarchyLevel?: number; // default: 1
  description?: string;
  color: {
    implanted: string; // default: '#006400ff'
    notImplanted: string; // default: '#00640080'
    draft: string; // default: '#eb00beff'
  };
};
```

### CreatePopTypeDTO

Defines the structure for creating a PopType.

```typescript
type CreatePopTypeDTO = {
  code: string;
  prefix: string;
  hierarchyLevel?: number; // default: 1
  description?: string;
  color: {
    implanted?: string; // default: '#006400ff'
    notImplanted?: string; // default: '#00640080'
    draft?: string; // default: '#eb00beff'
  };
  external_id?: any;
};
```

### UpdatePopTypeDTO

Defines the structure for updating a PopType.

```typescript
type UpdatePopTypeDTO = {
  code?: string;
  prefix?: string;
  hierarchyLevel?: number; // default: 1
  description?: string;
  color?: {
    implanted?: string; // default: '#006400ff'
    notImplanted?: string; // default: '#00640080'
    draft?: string; // default: '#eb00beff'
  };
  external_id?: any;
};
```

## Example Usage

### Creating a PopType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPopTypeData: CreatePopTypeDTO = {
  code: "NEW_CODE",
  prefix: "P_",
  hierarchyLevel: 2,
  color: {
    implanted: "#00FF00ff",
    notImplanted: "#00FF0080",
    draft: "#FF00FF80",
  },
};

sdk.popType.create(newPopTypeData).then((popType) => {
  console.log('PopType created:', popType);
});
```

### Updating a PopType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePopTypeData: UpdatePopTypeDTO = {
  description: "Updated description",
  hierarchyLevel: 3,
};

sdk.popType.updateById('popTypeId', updatePopTypeData).then(() => {
  console.log('PopType updated');
});
```

### Fetching PopTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.popType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('PopTypes:', pagination);
});
```

### Fetching a PopType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.popType.findById('popTypeId').then((popType) => {
  console.log('PopType:', popType);
});
```

### Deleting a PopType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.popType.deleteById('popTypeId').then(() => {
  console.log('PopType deleted');
});
```