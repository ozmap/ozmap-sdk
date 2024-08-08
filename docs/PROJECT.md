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
Response example
```json
{
  "total": 2,
  "count": 2,
  "rows": [
    {
      "area": {
        "coordinates": [
          [
            [
              -48.164063,
              11.178402
            ],
            [
              -72.421875,
              1.054628
            ],
            [
              -58.359375,
              -38.548165
            ],
            [
              -25.3125,
              -23.885838
            ],
            [
              -48.164063,
              11.178402
            ]
          ]
        ],
        "type": "Polygon"
      },
      "lat": -27.576620124852862,
      "lng": -48.52703645825386,
      "hierarchyLevels": {
        "box": {
          "POP": 1,
          "CE": 2,
          "CTO": 3
        },
        "cable": {
          "PRIMÁRIO": 1,
          "SECUNDÁRIO": 2,
          "DROP": 3
        }
      },
      "name": "Exemplo",
      "drop": {
        "defaults": {
          "cableType": "5d83b2fcd846ae365237b3a1"
        },
        "maxSize": 200
      },
      "defaultPonPotency": 0,
      "createdAt": "2019-10-10T14:28:09.746Z",
      "updatedAt": "2022-12-13T11:46:19.237Z",
      "parents": [],
      "hasLogo": false,
      "id": "5d9f3ff9200141000647f814"
    },
    {
      "area": {
        "coordinates": [
          [
            [
              -153.28125,
              86.312636
            ],
            [
              -53.4375,
              86.894401
            ],
            [
              -5.625,
              86.312636
            ],
            [
              37.96875,
              86.22108
            ],
            [
              74.53125,
              -85.622069
            ],
            [
              -8.4375,
              -81.093214
            ],
            [
              -118.125,
              -84.267172
            ],
            [
              -153.28125,
              86.312636
            ]
          ]
        ],
        "type": "Polygon"
      },
      "lat": -27.576663834467908,
      "lng": -48.52710351347923,
      "parents": [
        {
          "project": "5d9f3ff9200141000647f814"
        }
      ],
      "name": "Filho do Exemplo",
      "hasLogo": false,
      "drop": {
        "maxSize": 200,
        "defaults": {
          "cableType": "5d83b2fcd846ae365237b3a1"
        }
      },
      "defaultPonPotency": 0,
      "creatorData": {
        "id": "5c3173ee4fe3a70016d05bcd",
        "name": "Admin",
        "username": "admin"
      },
      "createdAt": "2022-12-06T14:53:00.990Z",
      "updatedAt": "2022-12-12T14:31:30.994Z",
      "id": "638f574c25360200206c1f44",
      "hierarchyLevels": {
        "box": {
          "POP": 1,
          "CE": 2,
          "CTO": 3
        },
        "cable": {
          "PRIMÁRIO": 1,
          "SECUNDÁRIO": 2,
          "DROP": 3
        }
      }
    }
  ],
  "start": 0,
  "limit": 5
}
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
