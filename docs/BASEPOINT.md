# BasePoint Module

BasePoint is a parent class, for more information visit its children documentation.

- [Pole](./POLE.md)<br>
- [Point](./POINT.md)<br>
- [Junction Box](./JUNCTIONBOX.md)<br>

## Models

### BasePoint

Defines the structure for BasePoint entities.

```typescript
type BasePoint = {
  _id?: string | ObjectId;
  id: string | ObjectId;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  adjacents: (string)[];
  tags: (string)[];
  kind: 'Pole' | 'Point' | 'JunctionBox';
  coords: [number, number];
};
```

## Example Usage

### Fetching BasePoints

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.basePoint.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('BasePoints:', pagination);
});
```

### Fetching a BasePoint by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.basePoint.findById('basePointId').then((basePoint) => {
  console.log('BasePoint:', basePoint);
});
```
