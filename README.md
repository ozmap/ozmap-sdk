# OZmap SDK

OZmap is a solution by devOZ. Based in Florianópolis since 2012, we develop software focused on facilitating the mapping of georeferenced data with the intention of generating intelligent information for strategic decisions.

## What is OZmap SDK?

The OZmap SDK is a tool designed to help developers interact with the OZmap API, providing a streamlined interface for managing georeferenced data. This SDK includes various methods for creating, updating, retrieving, and deleting different models within the OZmap ecosystem, such as projects, cables, boxes, poles, and more.

## Features

- **CRUD Operations**: Easily create, read, update, and delete data.
- **Data Mapping**: Simplifies the interaction with georeferenced data.
- **Batch Operations**: Perform batch updates and retrieves efficiently.
- **Pagination Support**: Handle large datasets with pagination.
- **Filter and Query**: Advanced filtering and querying capabilities.

## Installation

To install the OZmap SDK, use npm:

```bash
npm i --save @ozmap/ozmap-sdk
```

## Usage

### Using login and password

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';

const sdk = new OZMapSDK('https://api.example.com', { login: 'your-ozmap-login', password: 'your-ozmap-password' });
```

### Using API Key

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';

const sdk = new OZMapSDK('https://api.example.com', { apiKey: 'your-ozmap-api-key' });
```

## CRUD operations

### Create

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPopData: CreatePopDTO = {
  name: "New Pop",
  hierarchyLevel: 1,
  popType: "popTypeId",
  pole: "poleId",
  implanted: true,
};

sdk.pop.create(newPopData).then((pop) => {
  console.log('Pop created:', pop);
});
```

### Update

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePopData: UpdatePopDTO = {
  name: "Updated Pop",
  hierarchyLevel: 2,
};

sdk.pop.updateById('popId', updatePopData).then(() => {
  console.log('Pop updated');
});
```

### Fetch

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pop.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Pops:', pagination);
});
```

### Fetch by id

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pop.findById('popId').then((pop) => {
  console.log('Pop:', pop);
});
```

### Delete

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.pop.deleteById('popId').then(() => {
  console.log('Pop deleted');
});
```

## Documentation

## Models

### Boxes

[Base Box](./docs/BASEBOX.md)<br>
[Box](./docs/BOX.md)<br>
[Box Template](./docs/BOXTEMPLATE.md)<br>
[Box Type](./docs/BOXTYPE.md)<br>

### Building

[Building](./docs/BUILDING.md)<br>

### Cables

[Cable](./docs/CABLE.md)<br>
[Cable Type](./docs/CABLETYPE.md)<br>

### Colors

[Color](./docs/COLOR.md)<br>

### Connectors

[Connector](./docs/CONNECTOR.md)<br>
[Connector Type](./docs/CONNECTORTYPE.md)<br>

### Cords

[Cord](./docs/CORD.md)<br>

### Devices

[DIO](./docs/DIO.md)<br>
[DIO Type](./docs/DIOTYPE.md)<br>

### Ducts

[Duct](./docs/DUCT.md)<br>
[Duct Type](./docs/DUCTTYPE.md)<br>

### Fibers

[Fiber](./docs/FIBER.md)<br>
[Fiber Profile](./docs/FIBERPROFILE.md)<br>

### Files

[File](./docs/FILE.md)<br>

### Fusion

[Fusion](./docs/FUSION.md)<br>
[Fusion Type](./docs/FUSIONTYPE.md)<br>

### Infrastructure

[Horizontal Condominium](./docs/HORIZONTALCONDOMINIUM.md)<br>
[Junction Box](./docs/JUNCTIONBOX.md)<br>
[Junction Box Type](./docs/JUNCTIONBOXTYPE.md)<br>
[OLT](./docs/OLT.md)<br>
[OLT Type](./docs/OLTTYPE.md)<br>
[Pendency](./docs/PENDENCY.md)<br>
[Pendency Type](./docs/PENDENCYTYPE.md)<br>
[Point](./docs/POINT.md)<br>
[Pole](./docs/POLE.md)<br>
[Pole Type](./docs/POLETYPE.md)<br>
[PON](./docs/PON.md)<br>
[POP](./docs/POP.md)<br>
[POP Type](./docs/POPTYPE.md)<br>
[Post](./docs/POST.md)<br>

### Projects

[Project](./docs/PROJECT.md)<br>
[Project Group](./docs/PROJECTGROUP.md)<br>

### Properties

[Property](./docs/PROPERTY.md)<br>
[Prospect](./docs/PROSPECT.md)<br>

### Regions

[Region](./docs/REGION.md)<br>
[Region Type](./docs/REGIONTYPE.md)<br>

### Roles

[Role](./docs/ROLE.md)<br>

### Shelves

[Shelf](./docs/SHELF.md)<br>
[Shelf Type](./docs/SHELFTYPE.md)<br>

### Slots

[Slot](./docs/SLOT.md)<br>

### Splitters

[Splitter](./docs/SPLITTER.md)<br>
[Splitter Type](./docs/SPLITTERTYPE.md)<br>

### Switches

[Switch](./docs/SWITCH.md)<br>
[Switch Type](./docs/SWITCHTYPE.md)<br>

### System

[System Configuration](./docs/SYSTEMCONFIG.md)<br>

## API

For detailed information about the API endpoints and how to use them, please refer to the [OZmap API Documentation](https://ozmap.stoplight.io/docs/ozmap/f20b389eedb19-o-zmap).

## License

This project is licensed under the MIT License.

## Links

- [OZmap Website](https://ozmap.net/)
- [OZmap API Documentation](https://ozmap.stoplight.io/docs/ozmap/f20b389eedb19-o-zmap)