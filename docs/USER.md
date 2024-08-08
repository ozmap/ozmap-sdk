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
  "total": 6,
  "count": 6,
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
    },
    {
      "allProjects": true,
      "resources": [
        "OZmap",
        "OZmob",
        "Loki",
        "API"
      ],
      "email_confirmed": false,
      "username": "qa",
      "email": "qa@ozmap.com",
      "name": "qa",
      "phone": "",
      "role": "5accf8ee0ff2c819a4ffd38e",
      "observation": "",
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
      "creatorData": {
        "id": "5c3173ee4fe3a70016d05bcd",
        "name": "Admin",
        "username": "admin"
      },
      "locale": "pt_BR",
      "createdAt": "2022-12-06T13:42:17.706Z",
      "updatedAt": "2022-12-15T16:51:41.686Z",
      "__v": 0,
      "id": "638f46b925360200206c1e54"
    },
    {
      "allProjects": false,
      "resources": [
        "OZmap"
      ],
      "email_confirmed": false,
      "username": "teste",
      "email": "teste@teste.com",
      "name": "teste",
      "phone": "",
      "role": "5accf8f60ff2c819a4ffd38f",
      "observation": "",
      "projects": [],
      "creatorData": {
        "id": "638f46b925360200206c1e54",
        "name": "qa",
        "username": "qa"
      },
      "projectGroups": [],
      "locale": "en_US",
      "createdAt": "2022-12-14T12:47:50.324Z",
      "updatedAt": "2022-12-14T12:47:50.709Z",
      "__v": 0,
      "recover_password_data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM5OWM1ZjY4ZDAwMmMwMDIwNTk2YzdjIiwidGltZXN0YW1wIjoxNjcxMDIyMDcwNjkxLCJpYXQiOjE2NzEwMjIwNzAsImV4cCI6MTY3MTEwODQ3MH0.eoGprEK7_1K75FNN6lsJLT6oVZoAeHw5UqygUmGDJlM",
        "active": true
      },
      "id": "6399c5f68d002c0020596c7c"
    },
    {
      "allProjects": true,
      "resources": [
        "OZmap",
        "OZmob",
        "Loki",
        "API"
      ],
      "email_confirmed": false,
      "username": "reis",
      "email": "vinicius.souza@ozmap.com.br",
      "name": "reis",
      "phone": "",
      "role": "5accf8ee0ff2c819a4ffd38e",
      "observation": "",
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
      "creatorData": {
        "id": "5d9f3fb8200141000647f768",
        "name": "Support OZmap",
        "username": "devoz"
      },
      "locale": "pt_BR",
      "createdAt": "2022-12-14T17:17:00.831Z",
      "updatedAt": "2022-12-14T17:17:00.831Z",
      "__v": 0,
      "id": "639a050c8d002c0020597134"
    },
    {
      "allProjects": false,
      "resources": [
        "OZmap"
      ],
      "email_confirmed": false,
      "username": "example",
      "email": "apagar@gmail.com",
      "name": "example",
      "phone": "",
      "role": "5accf8ee0ff2c819a4ffd38e",
      "observation": "",
      "projects": [],
      "creatorData": {
        "id": "638657f1e0e378001461c35c",
        "name": "api",
        "username": "api"
      },
      "projectGroups": [],
      "locale": "pt_BR",
      "createdAt": "2022-12-15T11:41:57.450Z",
      "updatedAt": "2022-12-15T11:41:57.450Z",
      "__v": 0,
      "id": "639b08058d002c002059761c"
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
