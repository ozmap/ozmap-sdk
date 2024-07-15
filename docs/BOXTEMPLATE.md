# BoxTemplate Module

This document provides a concise guide to the BoxTemplate module, focusing on the BoxTemplate model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### BoxTemplate

Defines the structure for box templates.

```typescript
type BoxTemplate = {
  name: string;
  structure: object;
  positions: object;
  topology: object;
  description?: string;
};
```

### CreateBoxTemplateDTO

Defines the structure for creating a box template.

```typescript
type CreateBoxTemplateDTO = {
  name: string;
  structure: object;
  positions: object;
  topology: object;
  description?: string;
};
```

### UpdateBoxTemplateDTO

Defines the structure for updating a box template.

```typescript
type UpdateBoxTemplateDTO = Partial<CreateBoxTemplateDTO>;
```

## Example Usage

### Create a BoxTemplate

```typescript
import OZMapSDK from 'ozmapsdk';
import { CreateBoxTemplateDTO } from './BoxTemplate';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newBoxTemplateData: CreateBoxTemplateDTO = {
  name: 'New Template',
  structure: {},
  positions: {},
  topology: {},
  description: 'A new box template',
};

sdk.boxTemplate.create(newBoxTemplateData).then((boxTemplate) => {
  console.log('BoxTemplate created:', boxTemplate);
});
```

### Update a BoxTemplate

```typescript
import OZMapSDK from 'ozmapsdk';
import { UpdateBoxTemplateDTO } from './BoxTemplate';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updateBoxTemplateData: UpdateBoxTemplateDTO = {
  description: 'Updated description',
};

sdk.boxTemplate.updateById('boxTemplateId', updateBoxTemplateData).then(() => {
  console.log('BoxTemplate updated');
});
```

### Fetching BoxTemplates

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.BoxTemplate.find().then((pagination) => {
  console.log('BoxTemplatees:', pagination);
});
```
Response example
```json
{
  "total": 2,
  "count": 2,
  "rows": [
    {
      "name": "Vazio",
      "description": "",
      "positions": {
        "cables": {},
        "children": [],
        "splitters": {},
        "fusions": {},
        "connectors": {},
        "passings": {},
        "cords": {},
        "drops": {},
        "greydrops": {},
        "clients": {},
        "fibers": {},
        "switches": {},
        "dios": {},
        "postits": []
      },
      "topology": {
        "cables": {},
        "splitters": {},
        "fusions": {},
        "connectors": {},
        "passings": {},
        "cords": {},
        "drops": {},
        "switches": {},
        "dios": {}
      },
      "structure": {
        "topology": {
          "cables": {},
          "splitters": {},
          "fusions": {},
          "connectors": {},
          "passings": {},
          "cords": {},
          "drops": {},
          "switches": {},
          "dios": {}
        },
        "positions": {
          "cables": {},
          "children": [],
          "splitters": {},
          "fusions": {},
          "connectors": {},
          "passings": {},
          "cords": {},
          "drops": {},
          "greydrops": {},
          "clients": {},
          "fibers": {},
          "switches": {},
          "dios": {},
          "postits": []
        }
      },
      "createdAt": "2019-10-10T14:27:05.458Z",
      "updatedAt": "2020-03-25T14:31:17.376Z",
      "id": "589de1d126324a2564a6c4d0"
    },
    {
      "name": "SPL 01x08 AC",
      "description": "",
      "positions": {
        "cables": {},
        "children": [],
        "splitters": {
          "5da77a3ff003e84ed900001d": {
            "x": 215,
            "y": 95
          }
        },
        "fusions": {},
        "connectors": {},
        "passings": {},
        "cords": {},
        "drops": {},
        "greydrops": {},
        "clients": {},
        "fibers": {},
        "switches": {},
        "dios": {},
        "postits": []
      },
      "topology": {
        "cables": {},
        "splitters": {
          "5da77a3ff003e84ed900001d": {
            "connectorType": "5da61085493d9c00066653f5",
            "connectables": {
              "input": [
                null
              ],
              "output": [
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ]
            },
            "inputConnectionType": 0,
            "outputConnectionType": 1,
            "implanted": true,
            "isBalanced": true,
            "code": "01x08 AC",
            "isDrop": true,
            "name": "Splitter 1"
          }
        },
        "fusions": {},
        "connectors": {},
        "passings": {},
        "cords": {},
        "drops": {},
        "switches": {},
        "dios": {}
      },
      "structure": {
        "topology": {
          "cables": {},
          "splitters": {
            "5da77a3ff003e84ed900001d": {
              "connectorType": "5da61085493d9c00066653f5",
              "connectables": {
                "input": [
                  null
                ],
                "output": [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null
                ]
              },
              "inputConnectionType": 0,
              "outputConnectionType": 1,
              "implanted": true,
              "isBalanced": true,
              "code": "01x08 AC",
              "isDrop": true,
              "name": "Splitter 1"
            }
          },
          "fusions": {},
          "connectors": {},
          "passings": {},
          "cords": {},
          "drops": {},
          "switches": {},
          "dios": {}
        },
        "positions": {
          "cables": {},
          "children": [],
          "splitters": {
            "5da77a3ff003e84ed900001d": {
              "x": 215,
              "y": 95
            }
          },
          "fusions": {},
          "connectors": {},
          "passings": {},
          "cords": {},
          "drops": {},
          "greydrops": {},
          "clients": {},
          "fibers": {},
          "switches": {},
          "dios": {},
          "postits": []
        }
      },
      "createdAt": "2019-10-15T18:48:15.521Z",
      "updatedAt": "2020-03-25T14:31:17.377Z",
      "id": "5da6146f493d9c00066653f7"
    }
  ],
  "start": 0,
  "limit": 2
}
```

### Fetching a BoxTemplate by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.BoxTemplate.findById('BoxTemplateId').then((BoxTemplate) => {
  console.log('BoxTemplate:', BoxTemplate);
});
```

### Deleting a BoxTemplate

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.BoxTemplate.deleteById('BoxTemplateId').then(() => {
  console.log('BoxTemplate deleted');
});
```