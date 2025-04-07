# BaseBox Module

BaseBox is a parent class. For more information, visit its children documentation.

- [Box](./BOX.md)<br>
- [Building](./BUILDING.md)<br>
- [Property](./PROPERTY.md)<br>
- [POP](./POP.md)<br>
- [CableStub](./CABLESTUB.md)<br>

## Models

### BaseBox

Defines the structure for base boxes.

```typescript
type BaseBox = {
  tags?: string[]; // default: []
  project: string;
  cables?: string[]; // default: []
  pole?: string;
  name?: string;
  kind: string; // Enum: 'Box', 'Building', 'Property', 'Pop'
  observation?: string;
  coords: [number, number];
};
```

## Example Usage
### Fetching BaseBoxes

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.baseBox.find().then((pagination) => {
  console.log('BaseBoxes:', pagination);
});
```

### Fetching a BaseBox by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.baseBox.findById('baseBoxId').then((baseBox) => {
  console.log('BaseBox:', baseBox);
});
```