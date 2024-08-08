# NetworkConnectable Module

NetworkConeectable is a parent class, for more information, check its children documentation.

- [Fiber](./FIBER.md)<br>
- [Cord](./CORD.md)<br>

## Models

### NetworkConnectable

Defines the structure for NetworkConnectable entities.

```typescript
type NetworkConnectable = {
  _id?: string | ObjectId;
  id: string | ObjectId;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'Fiber' | 'Cord';
  connectors: (string | ObjectId | NetworkConnector)[];
  parent: string | ObjectId;
  project: string | ObjectId | Project;
  name: string;
};
```

## Example Usage

### Fetching NetworkConnectables

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.networkConnectable.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('NetworkConnectables:', pagination);
});
```

### Fetching a NetworkConnectable by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.networkConnectable.findById('networkConnectableId').then((networkConnectable) => {
  console.log('NetworkConnectable:', networkConnectable);
});
```
