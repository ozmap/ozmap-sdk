# Post Module

This document provides a concise guide to the Post module, focusing on the Post model and its Data Transfer Objects (DTOs) for creation and update operations.

## Models

### Post

Defines the structure for Post entities.

```typescript
type Post = {
  _id?: string;
  id: string;
  external_id?: any;
  creatorData?: {
    id: string;
    name: string;
    username: string;
  };
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt?: Date;
  element: {
    id: string;
    kind: 'property' | 'box' | 'building' | 'cable' | 'drop' | 'networkConnector' | 'pole' | 'pendency' | 'junctionBox' | 'duct';
  };
  owner: string;
  tags?: (string)[];
  title?: string;
  observation?: string;
  files: string[];
};
```

### CreatePostDTO

Defines the structure for creating a Post.

```typescript
type CreatePostDTO = {
  element: {
    id: string;
    kind: 'property' | 'box' | 'building' | 'cable' | 'drop' | 'networkConnector' | 'pole' | 'pendency' | 'junctionBox' | 'duct';
  };
  owner?: string;
  tags?: (string)[];
  title?: string;
  observation?: string;
  files?: string[];
  external_id?: any;
};
```

### UpdatePostDTO

Defines the structure for updating a Post.

```typescript
type UpdatePostDTO = {
  tags?: (string)[];
  title?: string;
  observation?: string;
  external_id?: any;
};
```

## Example Usage

### Creating a Post

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const newPostData: CreatePostDTO = {
  element: {
    id: "elementId",
    kind: "box",
  },
  title: "New Post Title",
  observation: "Observation text",
  tags: ["tag1", "tag2"],
};

sdk.post.create(newPostData).then((post) => {
  console.log('Post created:', post);
});
```
Response example
```json
{
  "title": "New post",
  "observation": "This is a new post",
  "element": {
    "id": "5da752be11450e0006947fb7",
    "kind": "box"
  },
  "tags": [
    "5fcf55a0200a240a98f18e2b"
  ],
  "createdAt": "2020-12-08T11:27:48.235Z",
  "updatedAt": "2020-12-08T11:27:48.235Z",
  "id": "5fcf6334200a240a98f18f25"
}
```
### Updating a Post

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const updatePostData: UpdatePostDTO = {
  title: "Updated Post Title",
  observation: "Updated observation text",
};

sdk.post.updateById('postId', updatePostData).then(() => {
  console.log('Post updated');
});
```

### Fetching Posts

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.post.find({ page: 1, limit: 10 }).then((pagination) => {
  console.log('Posts:', pagination);
});
```
Response example

```json
{
  "total": 1,
  "count": 1,
  "rows": [
    {
      "tags": [],
      "files": [
        "6368fe46c22ef800142f134d"
      ],
      "title": "Teste",
      "observation": "",
      "element": {
        "id": "5da779a211450e00069491ba",
        "kind": "property"
      },
      "owner": "5d9f3fb8200141000647f768",
      "creatorData": {
        "id": "5d9f3fb8200141000647f768",
        "name": "Support OZmap",
        "username": "devoz"
      },
      "createdAt": "2022-11-07T12:47:01.162Z",
      "updatedAt": "2022-11-07T12:47:02.665Z",
      "id": "6368fe455f40a200200bb7d8"
    }
  ],
  "start": 0,
  "limit": 1
}
```
### Fetching a Post by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.post.findById('postId').then((post) => {
  console.log('Post:', post);
});
```
Response example
```
{
  "tags": [],
  "files": [
    "6368fe46c22ef800142f134d"
  ],
  "title": "Teste",
  "observation": "",
  "element": {
    "id": "5da779a211450e00069491ba",
    "kind": "property"
  },
  "owner": "5d9f3fb8200141000647f768",
  "creatorData": {
    "id": "5d9f3fb8200141000647f768",
    "name": "Support OZmap",
    "username": "devoz"
  },
  "createdAt": "2022-11-07T12:47:01.162Z",
  "updatedAt": "2022-11-07T12:47:02.665Z",
  "id": "6368fe455f40a200200bb7d8"
}
```
### Deleting a Post

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.post.deleteById('postId').then(() => {
  console.log('Post deleted');
});
```

