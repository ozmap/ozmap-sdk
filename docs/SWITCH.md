# Switch Module

This document provides a concise guide to the Switch module, focusing on the Switch model and its usage.

## Models

### Switch

Defines the structure for Switch entities.

```typescript
type Switch = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  kind: string;
  connectables: Array<string | null>;
  switchType: string;
  port_labels: Array<string | null>;
  shelf?: string | null;
  manageable: boolean;
};
```

### CreateSwitchDTO

Defines the structure for creating a new Switch.

```typescript
type CreateSwitchDTO = {
  kind?: string;
  connectables?: Array<string | null>;
  switchType?: string;
  port_labels?: Array<string | null>;
  shelf?: string | null;
  manageable?: boolean;
  external_id?: any;
};
```

### UpdateSwitchDTO

Defines the structure for updating an existing Switch.

```typescript
type UpdateSwitchDTO = {
  kind?: string;
  connectables?: Array<string | null>;
  switchType?: string;
  port_labels?: Array<string | null>;
  shelf?: string | null;
  manageable?: boolean;
  external_id?: any;
};
```

## Example Usage

### Creating a Switch

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newSwitchData: CreateSwitchDTO = {
  kind: 'SWITCH',
  switchType: 'switchTypeId',
  port_labels: ['Port 1', 'Port 2'],
  manageable: true,
};
sdk.switch.create(newswitchData).then((sw) => {
  console.log('switch created:', sw);
});
```

### Updating a Switch

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateSwitchData: UpdateSwitchDTO = {
  manageable: false,
};

sdk.switch.updateById('switchId', updateSwitchData).then(() => {
  console.log('Switch updated');
});
```

### Deleting a Switch

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.switch.deleteById('switchId').then(() => {
  console.log('Switch deleted');
});
```

### Fetching switches

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.switch.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('switch:', pagination);
});
```

### Fetching a switch by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.switch.findById('switchId').then((sw) => {
  console.log('switch:', sw);
});
```