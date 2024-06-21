# IProspect Model

## Properties

- **tags** (`unknown[]`, optional): An array of tags associated with the prospect.
- **phone** (`string`, optional): The phone number of the prospect.
- **code** (`string`, optional): A code identifying the prospect.
- **address** (`string`, optional): The address of the prospect.
- **coords** (`Coords[]`, optional): The coordinates of the prospect's location.
- **name** (`string`, optional): The name of the prospect.
- **observation** (`string`, optional): Observations or comments about the prospect.
- **viable** (`boolean`, optional): Indicates whether the prospect is viable.

## Imported Interfaces

- **IModel**: The base model interface.

## Example Usage

```typescript
const exampleProspect: IProspect = {
  tags: ['potential', 'high-priority'],
  phone: '123-456-7890',
  code: 'P12345',
  address: '456 Elm St, Springfield, IL',
  coords: [[39.7817, -89.6501]],
  name: 'John Doe',
  observation: 'Interested in premium plan',
  viable: true,
};
```
