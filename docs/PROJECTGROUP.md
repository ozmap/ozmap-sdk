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
```json
{
  "hasLogo": false,
  "_id": "664f57a172f6c024d6b2f93a",
  "name": "API Group 1",
  "projects": [
    {
      "project": "5d9f3ff9200141000647f814"
    }
  ],
  "creatorData": {
    "id": "664f565b72f6c024d6b2f8b3",
    "name": "Example",
    "username": "Example"
  },
  "createdAt": "2024-05-23T14:50:09.413Z",
  "updatedAt": "2024-05-23T14:50:09.413Z",
  "__v": 0,
  "id": "664f57a172f6c024d6b2f93a"
}
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
Response example
```json
{
  "total": 3,
  "count": 3,
  "rows": [
    {
      "hasLogo": false,
      "name": "Group 1",
      "projects": [
        {
          "project": "5d9f3ff9200141000647f814"
        },
        {
          "project": "664f55f972f6c024d6b2f85b"
        }
      ],
      "creatorData": {
        "id": "664f565b72f6c024d6b2f8b3",
        "name": "Example",
        "username": "Example"
      },
      "createdAt": "2024-05-23T14:45:19.334Z",
      "updatedAt": "2024-05-23T14:45:19.334Z",
      "id": "664f567f72f6c024d6b2f8e1"
    },
    {
      "hasLogo": false,
      "name": "Group 2",
      "projects": [
        {
          "project": "5d9f3ff9200141000647f814"
        }
      ],
      "creatorData": {
        "id": "664f565b72f6c024d6b2f8b3",
        "name": "Example",
        "username": "Example"
      },
      "createdAt": "2024-05-23T14:45:25.288Z",
      "updatedAt": "2024-05-23T14:45:25.288Z",
      "id": "664f568572f6c024d6b2f8ee"
    },
    {
      "hasLogo": false,
      "name": "Group 3",
      "projects": [
        {
          "project": "5d9f3ff9200141000647f814"
        },
        {
          "project": "664f55f272f6c024d6b2f851"
        },
        {
          "project": "664f55f972f6c024d6b2f85b"
        },
        {
          "project": "664f560072f6c024d6b2f865"
        }
      ],
      "creatorData": {
        "id": "664f565b72f6c024d6b2f8b3",
        "name": "Example",
        "username": "Example"
      },
      "createdAt": "2024-05-23T14:45:32.786Z",
      "updatedAt": "2024-05-23T14:45:32.786Z",
      "id": "664f568c72f6c024d6b2f8fb"
    }
  ],
  "start": 0,
  "limit": 25
}
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