# ConnectorType Module

This document provides a concise guide to the ConnectorType module, focusing on the ConnectorType model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### ConnectorType

Defines the structure for connector types.

```typescript
type ConnectorType = {
  id: string;
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  loss: number;
  isDrop: boolean;
  external_id?: any;
};
```

### CreateConnectorTypeDTO

Defines the structure for creating a connector type.

```typescript
type CreateConnectorTypeDTO = {
  code: string;
  brand?: string;
  mold?: string;
  description?: string;
  loss: number;
  isDrop: boolean;
  external_id?: any;
};
```

### UpdateConnectorTypeDTO

Defines the structure for updating a connector type.

```typescript
type UpdateConnectorTypeDTO = {
  code?: string;
  brand?: string;
  mold?: string;
  description?: string;
  loss?: number;
  isDrop?: boolean;
  external_id?: any;
};
```

## Example Usage

### Creating a ConnectorType

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateConnectorTypeDTO } from './ConnectorType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newConnectorTypeData: CreateConnectorTypeDTO = {
  code: "CT001",
  loss: 0.5,
  isDrop: true,
};

sdk.connectorType.create(newConnectorTypeData).then((connectorType) => {
  console.log('ConnectorType created:', connectorType);
});
```

### Updating a ConnectorType

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateConnectorTypeDTO } from './ConnectorType';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateConnectorTypeData: UpdateConnectorTypeDTO = {
  description: "Updated description",
  loss: 0.4,
};

sdk.connectorType.updateById('connectorTypeId', updateConnectorTypeData).then(() => {
  console.log('ConnectorType updated');
});
```

### Fetching ConnectorTypes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.connectorType.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('ConnectorTypes:', pagination);
});
```

### Fetching a ConnectorType by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.connectorType.findById('connectorTypeId').then((connectorType) => {
  console.log('ConnectorType:', connectorType);
});
```

### Deleting a ConnectorType

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.connectorType.deleteById('connectorTypeId').then(() => {
  console.log('ConnectorType deleted');
});
```
