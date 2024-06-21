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

## Documentation

## Models

### Boxes

[Boxes](./docs/BOX.md)<br>
[Box types](./docs/BOX_TYPE.md)<br>

### Cables

[Cables](./docs/CABLE.md)<br>
[Cable types](./docs/CABLE_TYPE.md)<br>

### Clients

[Clients](./docs/CLIENT.md)<br>

### Colors

[Colors](./docs/COLOR.md)<br>

### Fibers

[Fiber Profile](./docs/FIBER_PROFILE.md)<br>

### Connectors

[Network Connectors](./docs/NETWORK_CONNECTOR.md)<br>
[Network Connectables](./docs/NETWORK_CONNECTABLE.md)<br>

### ONU

[ONU](./docs/ONU.md)

### Poles

[Poles](./docs/POLE.md)<br>
[Pole types](./docs/POLE_TYPE.md)<br>

### Properties

[Properties](./docs/PROPERTY.md)<br>

### Prospects

[Prospects](./docs/PROSPECT.md)<br>

### Regions

[Regions](./docs/REGION.md)<br>

### Users

[Users](./docs/USER.md)<br>

## Methods

All models share the same base methods.

[Methods](./docs/BASE_CLASS_METHODS.md)<br>

## API

For detailed information about the API endpoints and how to use them, please refer to the [OZmap API Documentation](https://ozmap.stoplight.io/docs/ozmap/f20b389eedb19-o-zmap).

## License

This project is licensed under the MIT License.

## Links

- [OZmap Website](https://ozmap.net/)
- [OZmap API Documentation](https://ozmap.stoplight.io/docs/ozmap/f20b389eedb19-o-zmap)
