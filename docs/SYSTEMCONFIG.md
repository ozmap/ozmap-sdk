# SystemConfig Module

This document provides a concise guide to the SystemConfig module, focusing on the SystemConfig model and its usage.

## Models

### SystemConfig

Defines the structure for SystemConfig entities.

```typescript
type SystemConfig = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  hierarchyLevels: {
    cables?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    boxes?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    pops?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    towers?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
  };
};
```

### CreateSystemConfigDTO

Defines the structure for creating a new SystemConfig.

```typescript
type CreateSystemConfigDTO = {
  hierarchyLevels: {
    cables?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    boxes?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    pops?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    towers?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
  };
  external_id?: any;
};
```

### UpdateSystemConfigDTO

Defines the structure for updating an existing SystemConfig.

```typescript
type UpdateSystemConfigDTO = {
  hierarchyLevels?: {
    cables?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    boxes?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    pops?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
    towers?: {
      id: number;
      name: string;
      translated_name?: string;
    }[];
  };
  external_id?: any;
};
```

## Example Usage

### Fetching SystemConfig

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.systemConfig.find().then((systemConfig) => {
  console.log('SystemConfig:', systemConfig);
});
```

### Updating SystemConfig

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateSystemConfigData: UpdateSystemConfigDTO = {
  hierarchyLevels: {
    cables: [
      { id: 1, name: 'Cable A', translated_name: 'Cable A (Translated)' },
    ],
  },
};

sdk.systemConfig.updateById('systemConfigId', updateSystemConfigData).then(() => {
  console.log('SystemConfig updated');
});
```
