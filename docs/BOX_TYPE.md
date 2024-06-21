# IBoxType Model

## Properties

- **code** (`string`): The code of the box type.
- **brand** (`string`): The brand of the box type.
- **mold** (`string`): The mold of the box type.
- **description** (`string`): The description of the box type.
- **default_template** (`ObjectID`): The default template associated with the box type.
- **config** (`object`): Configuration settings for the box type.
  - **base** (`object`):
    - **color** (`string`): The base color of the box.
  - **regular** (`object`):
    - **fillColor** (`string`): The fill color for regular boxes.
  - **not_implanted** (`object`):
    - **fillColor** (`string`): The fill color for not implanted boxes.
  - **draft** (`object`):
    - **fillColor** (`string`): The fill color for draft boxes.

## Imported Interfaces

- **IModel**: The base model interface.
- **ObjectID**: Represents a MongoDB ObjectID.

## Example Usage

```typescript
const exampleBoxType: IBoxType = {
  code: 'BT123',
  brand: 'BrandA',
  mold: 'MoldX',
  description: 'This is a description of the box type.',
  default_template: 6592008029c8c3e4dc76256c,
  config: {
    base: {
      color: 'blue',
    },
    regular: {
      fillColor: 'green',
    },
    not_implanted: {
      fillColor: 'red',
    },
    draft: {
      fillColor: 'yellow',
    },
  },
};
```
