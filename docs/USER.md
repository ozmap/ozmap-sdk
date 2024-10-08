# User Module

This document provides a concise guide to the User module, focusing on the User model and its usage.

## Models

### User

Defines the structure for User entities.

```typescript
type User = {
  _id?: string;
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  username: string;
  allUsers: boolean;
  email: string;
  resources: string[];
  name: string;
  phone?: string;
  observation?: string;
  role: string | Role;
  browserData?: any;
  apiKey?: string;
  projectGroups: ({ group: string } | { group: ProjectGroup })[];
  projects: ({ project: string; role: string; fromGroup: boolean } | { project: Project; role: string; fromGroup: boolean })[];
  locale?: string;
  email_confirmed: boolean;
};
```

### CreateUserDTO

Defines the structure for creating a new User.

```typescript
type CreateUserDTO = {
  username: string;
  allUsers: boolean;
  email: string;
  resources: string[];
  name: string;
  phone?: string;
  observation?: string;
  role: string;
  browserData?: any;
  apiKey?: string;
  projectGroups: { group: string }[];
  projects: { project: string; role: string; fromGroup: boolean }[];
  locale?: string;
  email_confirmed: boolean;
};
```

### UpdateUserDTO

Defines the structure for updating an existing User.

```typescript
type UpdateUserDTO = {
  username?: string;
  allUsers?: boolean;
  email?: string;
  resources?: string[];
  name?: string;
  phone?: string;
  observation?: string;
  role?: string;
  browserData?: any;
  apiKey?: string;
  projectGroups?: { group: string }[];
  projects?: { project: string; role: string; fromGroup: boolean }[];
  locale?: string;
  email_confirmed?: boolean;
};
```

## Example Usage

### Creating a User

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newUser: CreateUserDTO = {
  username: 'newUser',
  allUsers: false,
  email: 'newUser@example.com',
  resources: ['resource1', 'resource2'],
  name: 'New User',
  role: 'roleId',
  projectGroups: [{ group: 'groupId' }],
  projects: [{ project: 'projectId', role: 'roleId', fromGroup: false }],
  email_confirmed: false,
};

sdk.user.create(newUser).then((user) => {
  console.log('User created:', user);
});
```
Response example
```json
{
  "username": "example",
  "password": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
  "email": "example@gmail.com",
  "name": "",
  "phone": "",
  "role": "5accf8ee0ff2c819a4ffd38e",
  "status": 0,
  "observation": "",
  "email_confirmed": false,
  "autoGeneratePassword": false,
  "projects": [],
  "projectGroups": []
}
```

### Updating a User

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateUser: UpdateUserDTO = {
  email: 'updatedUser@example.com',
};

sdk.user.updateById('userId', updateUser).then(() => {
  console.log('User updated');
});
```

### Fetching Users

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.user.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Users:', pagination);
});
```
Response example
```json
{
  "total": 2,
  "count": 2,
  "rows": [
    {
      "allProjects": false,
      "resources": [
        "OZmap",
        "OZmob",
        "Loki",
        "API"
      ],
      "email_confirmed": false,
      "username": "admin",
      "email": "contato@devoz.com.br",
      "name": "Admin",
      "observation": "Trocar a senha padrão.",
      "role": "5accf8ee0ff2c819a4ffd38e",
      "projects": [
        {
          "fromGroup": false,
          "project": "5d9f3ff9200141000647f814",
          "role": "5accf8ee0ff2c819a4ffd38e"
        },
        {
          "fromGroup": false,
          "project": "638f574c25360200206c1f44",
          "role": "5accf8ee0ff2c819a4ffd38e"
        }
      ],
      "projectGroups": [
        {
          "group": "6660714f32285300201d59e7"
        }
      ],
      "createdAt": "2019-10-10T14:27:05.817Z",
      "updatedAt": "2022-12-13T19:15:23.435Z",
      "__v": 0,
      "locale": "en_US",
      "id": "5c3173ee4fe3a70016d05bcd"
    },
    {
      "allProjects": true,
      "resources": [
        "API"
      ],
      "email_confirmed": false,
      "username": "api",
      "email": "api@api.com.br",
      "name": "api",
      "phone": "",
      "role": "5accf8ee0ff2c819a4ffd38e",
      "observation": "",
      "apiKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2R1bGUiOiJhcGkiLCJ1c2VyIjoiNWQ5ZjNmYjgyMDAxNDEwMDA2NDdmNzY4IiwiY3JlYXRpb25EYXRlIjoiMjAyMi0xMS0yOVQxOTowNToxOC4wMzhaIiwiaWF0IjoxNjY5NzQ4NzE4fQ.5pLYZGWEqhBAxgzssmbQ8ORLHcZ0DMwWYV3WE0WgahQ",
      "projects": [
        {
          "fromGroup": true,
          "project": "5d9f3ff9200141000647f814",
          "role": "5accf8ee0ff2c819a4ffd38e"
        },
        {
          "fromGroup": false,
          "project": "638f574c25360200206c1f44",
          "role": "5accf8ee0ff2c819a4ffd38e"
        }
      ],
      "projectGroups": [
        {
          "group": "6660714f32285300201d59e7"
        }
      ],
      "creatorData": {
        "id": "5d9f3fb8200141000647f768",
        "name": "Support OZmap",
        "username": "devoz"
      },
      "locale": "pt_BR",
      "createdAt": "2022-11-29T19:05:21.388Z",
      "updatedAt": "2022-12-15T16:52:04.866Z",
      "__v": 0,
      "id": "638657f1e0e378001461c35c"
    }
  ],
  "start": 0,
  "limit": 25
}
```

### Fetching a User by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.user.findById('userId').then((user) => {
  console.log('User:', user);
});
```
Response example
```json
{
  "allProjects": false,
  "resources": [
    "OZmap",
    "OZmob",
    "Loki",
    "API"
  ],
  "email_confirmed": false,
  "username": "admin",
  "email": "contato@devoz.com.br",
  "name": "Admin",
  "observation": "Trocar a senha padrão.",
  "role": "5accf8ee0ff2c819a4ffd38e",
  "projects": [
    {
      "fromGroup": false,
      "project": "5d9f3ff9200141000647f814",
      "role": "5accf8ee0ff2c819a4ffd38e"
    },
    {
      "fromGroup": false,
      "project": "638f574c25360200206c1f44",
      "role": "5accf8ee0ff2c819a4ffd38e"
    }
  ],
  "projectGroups": [],
  "createdAt": "2019-10-10T14:27:05.817Z",
  "updatedAt": "2022-12-13T19:15:23.435Z",
  "locale": "en_US",
  "id": "5c3173ee4fe3a70016d05bcd"
}
```

### Deleting a User

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.user.deleteById('userId').then(() => {
  console.log('User deleted');
});
```
