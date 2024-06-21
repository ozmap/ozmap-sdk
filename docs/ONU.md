# IONU Model

## Properties

- **user_PPPoE** (`string`, optional): The PPPoE username associated with the ONU.
- **serial_number** (`string`, optional): The serial number of the ONU.
- **mac_address** (`string`, optional): The MAC address of the ONU.

## Imported Interfaces

- **IModel**: The base model interface.

## Example Usage

```typescript
const exampleONU: IONU = {
  user_PPPoE: 'user123',
  serial_number: 'SN123456789',
  mac_address: '00:1A:2B:3C:4D:5E',
};
```
