# IBaseBox Model

## Properties

- **certified** (`boolean`): Indicates whether the box is certified.
- **kind** (`EnumBoxesType`): The type of the box, as defined by the `EnumBoxesType` enumeration.
  - **EnumBoxesType** (`Enum`): BOX = 'Box', PROPERTY = 'Property', BUILDING = 'Building'.
- **project** (`IProject | ObjectID`): The project associated with the box, which can be an `IProject` object or an `ObjectID`.
- **cables** (`(ICable | ObjectID)[]`): An array of cables associated with the box, which can be `ICable` objects or `ObjectID`s.
- **coords** (`Coords[]`): An array of coordinates associated with the box.
- **name** (`string`): The name of the box.
- **history** (`unknown[]`): An array representing the history of the box.
- **hierarchyLevel** (`number`): The hierarchy level of the box.
- **boxType** (`ObjectID | IBoxType`): The type of box, which can be an `ObjectID` or an `IBoxType` object.
- **pole** (`ObjectID | IPole`): The pole associated with the box, which can be an `ObjectID` or an `IPole` object.
- **lat** (`number`, optional): The latitude of the box location.
- **lng** (`number`, optional): The longitude of the box location.
- **address** (`string`, optional): The address of the box location.
- **implanted** (`boolean`): Indicates whether the box is implanted.

## Imported Interfaces and Enums

- **IModel**: The base model interface.
- **IProject**: Interface for the project associated with the box.
- **ICable**: Interface for the cables associated with the box.
- **IBoxType**: Interface defining the type of box.
- **IPole**: Interface for the poles associated with the box.
- **ObjectID**: Represents a MongoDB ObjectID.
- **EnumBoxesType**: Enumeration defining the possible types of boxes.

## Example Usage

```typescript
const exampleBox: IBaseBox = {
  certified: true,
  kind: EnumBoxesType.Type1,
  project: 'projectId',
  cables: ['cableId1', 'cableId2'],
  coords: [
    { lat: 40.7128, lng: -74.006 },
    { lat: 34.0522, lng: -118.2437 },
  ],
  name: 'Main Box',
  history: [],
  hierarchyLevel: 2,
  boxType: 'boxTypeId',
  pole: 'poleId',
  lat: 40.7128,
  lng: -74.006,
  address: '123 Main St, Anytown, USA',
  implanted: true,
};
```
