# Project Module

This document provides a concise guide to the Project module, focusing on the Project model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Project

Defines the structure for Project entities.

```typescript
type Project = {
  _id?: string;
  id: string;
  external_id?: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  name: string;
  identifier?: string;
  parents: {
    project: string;
  }[];
  lat: number;
  lng: number;
  defaultPonPotency: number;
  defaultDropSize?: number;
  hasLogo: boolean;
  drop: {
    type: {
      cableType: string;
    };
    maxSize: number;
  };
  area: {
    type: 'Polygon';
    coordinates: number[][][];
  };
};
```

### CreateProjectDTO

Defines the structure for creating a Project.

```typescript
type CreateProjectDTO = {
  name?: string;
  identifier?: string;
  parents?: {
    project: string;
  }[];
  lat?: number;
  lng?: number;
  defaultPonPotency?: number;
  defaultDropSize?: number;
  drop?: {
    type: {
      cableType: string;
    };
    maxSize: number;
  };
  area?: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  external_id?: any;
};
```

### UpdateProjectDTO

Defines the structure for updating a Project.

```typescript
type UpdateProjectDTO = {
  name?: string;
  identifier?: string;
  parents?: {
    project: string;
  }[];
  lat?: number;
  lng?: number;
  defaultPonPotency?: number;
  drop?: {
    type: {
      cableType: string;
    };
    maxSize: number;
  };
  area?: {
    type: 'Polygon';
    coordinates: number[][][];
  };
  external_id?: any;
};
```

## Example Usage

### Creating a Project

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newProjectData: CreateProjectDTO = {
  name: "New Project",
  lat: 12.34,
  lng: 56.78,
  defaultPonPotency: 100,
};

sdk.project.create(newProjectData).then((project) => {
  console.log('Project created:', project);
});
```

### Updating a Project

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateProjectData: UpdateProjectDTO = {
  name: "Updated Project Name",
  lat: 98.76,
  lng: 54.32,
};

sdk.project.updateById('projectId', updateProjectData).then(() => {
  console.log('Project updated');
});
```

### Fetching Projects

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.project.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Projects:', pagination);
});
```

### Fetching a Project by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.project.findById('projectId').then((project) => {
  console.log('Project:', project);
});
```

### Deleting a Project

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.project.deleteById('projectId').then(() => {
  console.log('Project deleted');
});
```