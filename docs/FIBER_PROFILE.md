# IFiberProfile Model

## Properties

- **defaultFiberColor** (`string`): The default color of the fibers.
- **defaultTubeColor** (`string`): The default color of the tubes.
- **fibers** (`{ color: string }[]`): An array of objects representing the fibers, each with a color property.
- **tubes** (`{ color: string }[]`): An array of objects representing the tubes, each with a color property.

## Imported Interfaces

- **IModel**: The base model interface.

## Example Usage

```typescript
const exampleFiberProfile: IFiberProfile = {
  defaultFiberColor: 'blue',
  defaultTubeColor: 'green',
  fibers: [{ color: 'red' }, { color: 'yellow' }, { color: 'green' }, { color: 'brown' }],
  tubes: [{ color: 'blue' }, { color: 'orange' }, { color: 'green' }, { color: 'black' }],
};
```
