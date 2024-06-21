# IProperty Model

## Properties

- **history** (`IClientLog`, optional): The history of clients associated with the property.
  - **clients** (`[IClientLogData]`): An array of client log data.
    - **id** (`string`, optional): The identifier of the client log data.
    - **code** (`string`, optional): The code of the client log data.
    - **enter_date** (`Date | string`, optional): The entry date of the client log data.
    - **exit_date** (`Date | string`, optional): The exit date of the client log data.
- **observation** (`string`, optional): Observations or comments about the property.
- **drop** (`ObjectID`, optional): The drop associated with the property.
- **tags** (`[unknown]`, optional): An array of tags associated with the property.
- **cables** (`[ObjectID]`, optional): An array of cables associated with the property.
- **kind** (`string`, optional): The type or kind of property.
- **coords** (`Coords[]`, optional): The coordinates of the property.
- **address** (`string`, optional): The address of the property.
- **box** (`ObjectID`, optional): The box associated with the property.
- **client** (`IClient`, optional): The client associated with the property.
- **project** (`IProject`, optional): The project associated with the property.
- **potencyRead** (`number`, optional): The potency read of the property.
- **pole** (`ObjectID`, optional): The pole associated with the property.
- **createdAt** (`Date`, optional): The date the property was created.
- **updatedAt** (`Date`, optional): The date the property was last updated.
- **lng** (`number`, optional): The longitude of the property.
- **lat** (`number`, optional): The latitude of the property.
- **connections** (`[IConnection]`, optional): An array of connections associated with the property.

## Imported Interfaces

- **IModel**: The base model interface.
- **ObjectID**: Represents a MongoDB ObjectID.
- **IProject**: Interface for the project associated with the property.
- **IClient**: Interface for the client associated with the property.
- **IConnection**: Interface for the connections associated with the property.

## Example Usage

```typescript
import IProperty from './IProperty';
import ObjectID from 'bson-objectid';

const exampleProperty: IProperty = {
  history: {
    clients: [{ id: 'client123', code: 'C123', enter_date: '2023-01-01', exit_date: '2024-01-01' }],
  },
  observation: 'This is a sample property observation.',
  drop: ObjectID,
  tags: ['residential'],
  cables: [ObjectID],
  kind: 'Residential',
  coords: [[40.7128, -74.006]],
  address: '123 Main St, New York, NY',
  box: ObjectID,
  client: {
    Client properties
  },
  project: {
    Project properties
  },
  potencyRead: -22,
  pole: ObjectID,
  createdAt: new Date(),
  updatedAt: new Date(),
  lng: -74.006,
  lat: 40.7128,
  connections: [
    {
      Connection properties
    },
  ],
};
```
