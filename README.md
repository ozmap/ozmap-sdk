# ozmap-sdk

Use this sdk to access ozmap plataform and connect it to your own systems

[Site](https://ozmap.com.br/) |
[API](https://api.ozmap.com.br) |
[Docs](https://ajuda.ozmap.com.br/)

## Installation

Using npm:

```shell
$ npm i --save @ozmap/ozmap-sdk
```

In Node.js:

```ts
// Load the full build.
import OZMapSDK from '@ozmap/ozmap-sdk';

// Creating SDK instance
let ozmap = new OZMapSDK('$OZMAP_URL', '$OZMAP_KEY');

// Authenticating using KEY
await ozmap.authentication();

// Authenticating using User/Password
await ozmap.authentication('$OZMAP_USER', '$OZMAP_PASSWORD');
```

Usage examples:

```ts
// Fetching ALL cables
let cables = await ozmap.getCable().getAll();

// Fetch Cable by ID
let cable = await ozmap.getCable().getById('$CABLE_ID');

...
```
