# NetworkConnector Module

NetworkConnector is a parent class, for more information, check its children documentation.

- [DIO](./DIO.md)<br>
- [Connector](./CONNECTOR.md)<br>
- [Splitter](./SPLITTER.md)<br>
- [Fusion](./FUSION.md)<br>
- [Passing](./PASSING.md)<br>
- [Switch](./SWITCH.md)<br>
- [Shelf](./SHELF.md)<br>
- [OLT](./OLT.md)<br>
- [Slot](./SLOT.md)<br>
- [PON](./PON.md)<br>

## Models

### NetworkConnector

Defines the structure for NetworkConnector entities.

```typescript
type NetworkConnector = {
  _id?: string | ObjectId;
  id: string | ObjectId;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: 'Splitter' | 'DIO' | 'Fusion' | 'Connector' | 'Passing' | 'Switch' | 'Shelf' | 'OLT' | 'Slot' | 'PON';
  connectables: (string | ObjectId | { input: (string | null)[]; output: (string | null)[] })[];
  index?: number;
  label?: string;
  attenuation: number[];
  implanted: boolean;
  isDrop: boolean;
  parent: string | ObjectId | BaseBox;
  project: string | ObjectId | Project;
  observation?: string;
  name?: string;
  size?: number;
  shelf?: string | ObjectId;
};
```

## Example Usage

### Fetching NetworkConnectors

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.networkConnector.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('NetworkConnectors:', pagination);
});
```

### Fetching a NetworkConnector by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.networkConnector.findById('networkConnectorId').then((networkConnector) => {
  console.log('NetworkConnector:', networkConnector);
});
```
