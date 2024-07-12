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

### Fetching a Post by ID

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.post.findById('postId').then((post) => {
  console.log('Post:', post);
});
```

### Deleting a Post

```typescript
import OZMapSDK from 'ozmapsdk';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

sdk.post.deleteById('postId').then(() => {
  console.log('Post deleted');
});
```