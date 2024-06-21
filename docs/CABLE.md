# IBaseCable Model

## Properties

- **certified** (`boolean`): Indicates whether the cable is certified.
- **name** (`string`): The name of the cable.
- **fiberNumber** (`number`): The number of fibers in the cable.
- **index** (`number`, optional): An optional index for the cable.
- **looseNumber** (`number`): The number of loose fibers in the cable.
- **kind** (`ICableType`): The type of cable, defined by the `ICableType` interface.
- **hierarchyLevel** (`number`): The hierarchy level of the cable.
- **color** (`ObjectID | string | IColor`): The color of the cable, which can be an `ObjectID`, a string, or an `IColor` object.
- **tags** (`ObjectID[] | string[]`): An array of tags associated with the cable, which can be `ObjectID`s or strings.
- **cableType** (`ObjectID | ICableType`): The type of cable, which can be an `ObjectID` or an `ICableType` object.
- **observation** (`string`): Observations or comments about the cable.
- **poles** (`{ id: IPole | ObjectID; reserve: number; }[]`): An array of poles associated with the cable, each with an `id` (which can be an `IPole` or `ObjectID`) and a `reserve` number.
- **boxA** (`string | ObjectID | IBaseBox`): The first box associated with the cable, which can be a string, an `ObjectID`, or an `IBaseBox` object.
- **boxB** (`string | ObjectID | IBaseBox`): The second box associated with the cable, which can be a string, an `ObjectID`, or an `IBaseBox` object.
- **orientationA** (`string`): The orientation of the first box.
- **orientationB** (`string`): The orientation of the second box.
- **project** (`ObjectID | IProject`): The project associated with the cable, which can be an `ObjectID` or an `IProject` object.
- **implanted** (`boolean`): Indicates whether the cable is implanted.
- **length** (`number`): The length of the cable.
- **altitude_length** (`number`): The length of the cable considering altitude.
- **ground_length** (`number`): The length of the cable considering ground level.
- **loss** (`number`): The loss factor of the cable.

## Imported Interfaces

- **IModel**: The base model interface.
- **IProject**: Interface for the project associated with the cable.
- **ICableType**: Interface defining the type of cable.
- **IBaseBox**: Interface for the base box associated with the cable.
- **IColor**: Interface defining the color of the cable.
- **IPole**: Interface for the poles associated with the cable.
- **ObjectID**: Represents a MongoDB ObjectID.

## Example Usage

```typescript
const exampleCable: IBaseCable = {
  certified: true,
  name: 'Fiber Optic Cable',
  fiberNumber: 12,
  looseNumber: 6,
  kind: {
    ICableType properties
  },
  hierarchyLevel: 1,
  color: 'red',
  tags: ['tag1', 'tag2'],
  cableType: {
    ICableType properties
  },
  observation: 'This is a sample observation.',
  poles: [
    { id: 'pole1', reserve: 10 },
    { id: 'pole2', reserve: 5 },
  ],
  boxA: 'boxA',
  boxB: 'boxB',
  orientationA: 'north',
  orientationB: 'south',
  project: 'projectId',
  implanted: true,
  length: 1000,
  altitude_length: 980,
  ground_length: 1000,
  loss: 0.5,
};
```
