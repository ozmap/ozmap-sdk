# FileProxy Module

## FileProxy Class

### Overview

The `FileProxy` class facilitates operations related to files associated with posts, including creation.

### Methods

#### `create(postId: Post['id'], files: Blob[], options?: Parameters<Api['post']>[0]['options']): Promise<File>`

Creates files associated with a post identified by `postId`.

- **Parameters:**
    - `postId`: ID of the post to associate the files with.
    - `files`: Array of Blob objects representing the files to upload.

### Example Usage

#### Uploading Files

```typescript
import OZMapSDK from 'ozmapsdk';
import { Blob } from 'blob';

const sdk = new OZMapSDK('ozmapURL', { apiKey: 'yourApiKey' });

const postId = 'postId123'; // Replace with actual post ID
const filesToUpload = [new Blob(['file content'], { type: 'text/plain' })];

sdk.fileProxy.create(postId, filesToUpload).then((file) => {
  console.log('File uploaded:', file);
}).catch((error) => {
  console.error('Failed to upload file:', error);
});
```

