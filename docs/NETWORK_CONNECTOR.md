# INetworkConnector Model

## Properties

- **parent** (`ObjectID`): The parent object associated with the network connector.
- **isDrop** (`boolean`): Indicates whether the connector is a drop connector.
- **isBalanced** (`boolean`, optional): Indicates whether the connector is balanced.
- **project** (`ObjectID`): The project associated with the network connector.
- **connectables** (`object`): An object containing arrays of input and output network connectables.
  - **input** (`INetworkConnectable[]`): An array of input network connectables.
  - **output** (`INetworkConnectable[]`): An array of output network connectables.
- **attenuation** (`number[]`): An array representing the attenuation values of the connector.
- **name** (`string`): The name of the network connector.
- **kind** (`EnumConnectorsType`): The type of the network connector, as defined by the `EnumConnectorsType` enumeration.
  - **EnumConnectorsType** (`Enum`): SPLITTER = 'Splitter', CONNECTOR = 'Connector', PASSING = 'Passing', FUSION = 'Fusion', PON = 'PON', SHELF = 'Shelf', OLT = 'OLT', SLOT = 'Slot', DIO = 'DIO', SWITCH = 'Switch'.
- **id** (`ObjectID`, optional): The unique identifier of the network connector.
- **shelf** (`ObjectID | string`, optional): The shelf associated with the network connector.
- **implanted** (`boolean`): Indicates whether the network connector is implanted.
- **orientation** (`string`, optional): The orientation of the network connector.
- **observation** (`string`, optional): Observations or comments about the network connector.
- **index** (`number`, optional): An optional index for the network connector.

## Imported Interfaces and Enums

- **IModel**: The base model interface.
- **ObjectID**: Represents a MongoDB ObjectID.
- **INetworkConnectable**: Interface for the network connectable associated with the network connector.
- **EnumConnectorsType**: Enumeration defining the possible types of network connectors.

## Example Usage

```typescript
const exampleNetworkConnector: INetworkConnector = {
  parent: ObjectID,
  isDrop: true,
  isBalanced: false,
  project: ObjectID,
  connectables: {
    input: [{NetworkConnectable properties}],
    output: [{NetworkConnectable properties}]
  },
  attenuation: [0.5, 0.7],
  name: 'Main Network Connector',
  kind: EnumConnectorsType.Type1,
  id: ObjectID,
  shelf: 'Shelf1',
  implanted: true,
  orientation: 'north',
  observation: 'This is a sample observation.',
  index: 1
};
```
