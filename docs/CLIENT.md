# IClient Model

## Properties

- **certified** (`boolean`, optional): Indicates whether the client is certified.
- **status** (`number`, optional): The status of the client.
- **observation** (`string`, optional): Observations or comments about the client.
- **tags** (`Array<unknown>`, optional): An array of tags associated with the client.
- **onu** (`IONU`, optional): The ONU (Optical Network Unit) associated with the client.
- **implanted** (`boolean`, optional): Indicates whether the client is implanted.
- **kind** (`string`, optional): The type or kind of client.
- **code** (`string`, optional): The code associated with the client.
- **name** (`string`, optional): The name of the client.
- **project** (`string`, optional): The project associated with the client.

## Imported Interfaces

- **IModel**: The base model interface.
- **IONU**: Interface for the ONU (Optical Network Unit) associated with the client.

## Example Usage

```typescript
import IClient from './IClient';

const exampleClient: IClient = {
  certified: true,
  status: 1,
  observation: 'This is a sample client observation.',
  tags: ['tag1', 'tag2'],
  onu: {
    ONU properties
  },
  implanted: false,
  kind: 'Residential',
  code: 'C12345',
  name: 'John Doe',
  project: 'ProjectA',
};
```
