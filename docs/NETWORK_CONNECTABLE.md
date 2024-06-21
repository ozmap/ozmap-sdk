# INetworkConnectable Model

## Properties

- **connectors** (`(ObjectID | INetworkConnector)[]`): An array of connectors associated with the network connectable, which can be `ObjectID`s or `INetworkConnector` objects.
- **name** (`string`): The name of the network connectable.
- **project** (`ObjectID`): The project associated with the network connectable.
- **parent** (`ObjectID`): The parent object associated with the network connectable.
- **kind** (`string`): The type or kind of network connectable.
- **id** (`ObjectID`, optional): The unique identifier of the network connectable.

## Imported Interfaces

- **IModel**: The base model interface.
- **ObjectID**: Represents a MongoDB ObjectID.
- **INetworkConnector**: Interface for the network connector associated with the network connectable.

## Example Usage

```typescript
const exampleNetworkConnectable = {
  connectors: [ObjectID],
  name: 'Main Network Connectable',
  project: ObjectID,
  parent: ObjectID,
  kind: 'Fiber',
  id: ObjectID,
};
```
