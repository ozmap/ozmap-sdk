# IPole Model

## Properties

- **isAereo** (`boolean`): Indicates whether the pole is aerial.
- **project** (`ObjectID | IProject`): The project associated with the pole, which can be an `ObjectID` or an `IProject` object.
- **name** (`string`): The name of the pole.
- **coords** (`number[]`): The coordinates of the pole.
- **lat** (`number`, optional): The latitude of the pole.
- **lng** (`number`, optional): The longitude of the pole.
- **adjacents** (`(IPole | ObjectID)[]`): An array of adjacent poles, which can be `IPole` objects or `ObjectID`s.
- **usable** (`boolean`): Indicates whether the pole is usable.
- **kind** (`EnumPointType`): The type of the pole, as defined by the `EnumPointType` enumeration.
  - **EnumPointType** (`Enum`): POINT = 'Point', POLE = 'Pole'.
- **poleType** (`ObjectID | IPoleType`): The type of pole, which can be an `ObjectID` or an `IPoleType` object.
- **observation** (`string`): Observations or comments about the pole.

## Imported Interfaces and Enums

- **IProject**: Interface for the project associated with the pole.
- **IPoleType**: Interface defining the type of pole.
- **ObjectID**: Represents a MongoDB ObjectID.
- **EnumPointType**: Enumeration defining the possible types of points.

## Example Usage

```typescript
const examplePole: IPole = {
  isAereo: true,
  project: ObjectID,
  name: 'Pole 1',
  coords: [40.7128, -74.006],
  lat: 40.7128,
  lng: -74.006,
  adjacents: [ObjectID],
  usable: true,
  kind: EnumPointType.Type1,
  poleType: ObjectID,
  observation: 'This is a sample observation about the pole.',
};
```
