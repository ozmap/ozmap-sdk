# Connector Module

This document provides a detailed guide to the Connector module, focusing on the Connector model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Connector

Defines the structure for connectors.

```typescript
type Connector = {
  kind: NetworkConnectorKind.CONNECTOR;
  connectables: Array<string | null>;
  connectorType: string;
  parent: string | BaseConnectorSchema;
  project: string | ProjectSchema;
  connectorType: string | ConnectorTypeSchema;
  connectables: Array<string | NetworkConnectableSchema | null>;
  // other properties from NetworkConnectorSchema and ConnectorDataSchema
};
```

### CreateConnectorDTO

Defines the structure for creating a connector.

```typescript
type CreateConnectorDTO = Partial<Connector> & {
  external_id?: any;
};
```

### UpdateConnectorDTO

Defines the structure for updating a connector.

```typescript
type UpdateConnectorDTO = Partial<Connector> & {
  external_id?: any;
};
```

## Example Usage

### Create a Connector

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateConnectorDTO } from './Connector';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newConnectorData: CreateConnectorDTO = {
  connectorType: 'ConnectorTypeId',
};

sdk.connector.create(newConnectorData).then((connector) => {
  console.log('Connector created:', connector);
});
```

### Update a Connector

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateConnectorDTO } from './Connector';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateConnectorData: UpdateConnectorDTO = {
  connectorType: 'updatedConnectorTypeId',
};

sdk.connector.updateById('connectorId', updateConnectorData).then(() => {
  console.log('Connector updated');
});
```
### Fetching Connectors

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.Connector.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Connector:', pagination);
});
```

### Fetching a Connector by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.Connector.findById('ConnectorId').then((Connector) => {
  console.log('Connector:', Connector);
});
```

### Deleting a Connector

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.Connector.deleteById('ConnectorId').then(() => {
  console.log('Connector deleted');
});
```