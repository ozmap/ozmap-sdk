# Project Group Module

This document provides a concise guide to the Project Group module, focusing on the Project Group model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### ProjectGroup

Defines the structure for Project Group entities.

```typescript
type ProjectGroup = {
  _id?: string;
  id: string;
  external_id?: any;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  name: string;
  hasLogo: boolean;
  projects: {
    project: string;
  }[];
  users?: string[];
};
```

### CreateProjectGroupDTO

Defines the structure for creating a Project Group.

```typescript
type CreateProjectGroupDTO = {
  name: string;
  projects: {
    project: string;
  }[];
  users?: string[];
};
```

### UpdateProjectGroupDTO

Defines the structure for updating a Project Group.

```typescript
type UpdateProjectGroupDTO = {
  name?: string;
  projects?: {
    project: string;
  }[];
  users?: string[];
  external_id?: any;
};
```

## Example Usage

### Creating a Project Group

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newProjectGroupData: CreateProjectGroupDTO = {
  name: "New Project Group",
  projects: [{ project: "projectId1" }, { project: "projectId2" }],
};

sdk.projectGroup.create(newProjectGroupData).then((projectGroup) => {
  console.log('Project Group created:', projectGroup);
});
```

### Updating a Project Group

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateProjectGroupData: UpdateProjectGroupDTO = {
  name: "Updated Project Group Name",
};

sdk.projectGroup.updateById('projectGroupId', updateProjectGroupData).then(() => {
  console.log('Project Group updated');
});
```

### Fetching Project Groups

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.projectGroup.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Project Groups:', pagination);
});
```

### Fetching a Project Group by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.projectGroup.findById('projectGroupId').then((projectGroup) => {
  console.log('Project Group:', projectGroup);
});
```

### Deleting a Project Group

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.projectGroup.deleteById('projectGroupId').then(() => {
  console.log('Project Group deleted');
});
```