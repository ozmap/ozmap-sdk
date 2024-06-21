# IProject Model

## Properties

- **area** (`object`): The area covered by the project.
  - **coordinates** (`Coords[]`): An array of coordinates defining the project area.
  - **type** (`string`): The type of area.
- **lat** (`number`): The latitude of the project's central point.
- **lng** (`number`): The longitude of the project's central point.
- **parents** (`Array<{ project: ObjectID }>`): An array of parent projects.
- **name** (`string`): The name of the project.
- **drop** (`object`): Information about the project's drop.
  - **maxSize** (`number`): The maximum size of the drop.
  - **defaults** (`object`): Default values for the drop.
    - **cableType** (`ObjectID`): The default cable type.
- **defaultPonPotency** (`number`): The default PON potency for the project.
- **createdAt** (`Date`): The date the project was created.
- **updatedAt** (`Date`): The date the project was last updated.
- **hierarchyLevels** (`object`): The hierarchy levels of the project.
  - **box** (`Record<string, number>`): The hierarchy levels for boxes.
  - **cable** (`Record<string, number>`): The hierarchy levels for cables.
- **identifier** (`string`, optional): An optional identifier for the project.

## Example Usage

```typescript
const exampleProject: IProject = {
  area: {
    coordinates: [[40.7128, -74.006]],
    type: 'Polygon',
  },
  lat: 40.7128,
  lng: -74.006,
  parents: [{ project: ObjectID }],
  name: 'Fiber Optic Expansion Project',
  drop: {
    maxSize: 100,
    defaults: {
      cableType: ObjectID,
    },
  },
  defaultPonPotency: -18,
  createdAt: new Date(),
  updatedAt: new Date(),
  hierarchyLevels: {
    box: { 'Level 1': 1, 'Level 2': 2 },
    cable: { 'Level 1': 1, 'Level 2': 2 },
  },
  identifier: 'FOP123',
};
```
