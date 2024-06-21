# ICableType Model

## Properties

- **description** (`string`): The description of the cable type.
- **fiberNumber** (`number`): The number of fibers in the cable.
- **looseNumber** (`number`): The number of loose fibers in the cable.
- **base_loss** (`number`): The base loss factor of the cable.
- **brand** (`string`): The brand of the cable.
- **mold** (`string`): The mold of the cable.
- **code** (`string`): The code of the cable type.
- **config** (`object`): Configuration settings for the cable type.
  - **regular** (`object`):
    - **weight** (`number`): The weight of the regular cable.
    - **color** (`string`): The color of the regular cable.
  - **not_implanted** (`object`):
    - **weight** (`number`): The weight of the not implanted cable.
    - **color** (`string`): The color of the not implanted cable.
- **fiberProfile** (`ObjectID | IFiberProfile`): The fiber profile associated with the cable type, which can be an `ObjectID` or an `IFiberProfile` object.

## Imported Interfaces

- **IModel**: The base model interface.
- **IFiberProfile**: Interface for the fiber profile associated with the cable type.
- **ObjectID**: Represents a MongoDB ObjectID.

## Example Usage

```typescript
const exampleCableType: ICableType = {
  description: 'High quality fiber optic cable.',
  fiberNumber: 24,
  looseNumber: 6,
  base_loss: 0.2,
  brand: 'FiberBrand',
  mold: 'MoldY',
  code: 'CBL-1234',
  config: {
    regular: {
      weight: 50,
      color: 'black',
    },
    not_implanted: {
      weight: 45,
      color: 'grey',
    },
  },
  fiberProfile: ObjectID,
};
```
