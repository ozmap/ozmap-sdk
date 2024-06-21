# Methods

### create(model: IModel): Promise<IModel>

Creates a new instance of the model.

#### Example

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const newUser = {
  username: 'jdoe',
  email: 'jdoe@example.com',
  name: 'John Doe',
  observation: 'New user',
  role: ObjectID,
  projects: [],
};

sdk.user.create(newUser).then((createdUser) => {
  console.log(createdUser);
});
```

### update(model: IModel): Promise<void>

Updates an existing instance of the model.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const updatedUser = {
  id: ObjectID(507f1f77bcf86cd799439011),
  username: 'jdoe',
  email: 'jdoe_updated@example.com',
  name: 'John Doe Updated',
  observation: 'Updated user',
  role: ObjectID(60d5f5b2e12d4c3d08d12345),
  projects: [],
};
sdk.user.update(updatedUser).then(() => {
  console.log('User updated successfully');
});
```

### getById(id: ObjectID): Promise<IModel>

Retrieves an instance of the model by its ID.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const id = ObjectID('507f1f77bcf86cd799439011');
sdk.user.getById(id).then((user) => {
  console.log(user);
});
```

### getByIds(ids: Array<ObjectID>): Promise<Array<IModel>>

Retrieves multiple instances of the model by their IDs.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const ids = [ObjectID('507f1f77bcf86cd799439011'), ObjectID('60d5f5b2e12d4c3d08d12345')];
sdk.user.getByIds(ids).then((users) => {
  console.log(users);
});
```

### delete(id: ObjectID): Promise<IModel>

Deletes an instance of the model by its ID.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const id = ObjectID('507f1f77bcf86cd799439011');
sdk.user.delete(id).then((user) => {
  console.log(user);
});
```

### getAll(): Promise<IPagination<IModel>>

Retrieves all instances of the model with pagination.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

sdk.user.getAll().then((users) => {
  console.log(users);
});
```

### getAllByFilter(filter: Array<IFilter>): Promise<IPagination<IModel>>

Retrieves instances of the model matching the specified filter with pagination.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const filter = [{ property: 'username', operator: 'EQ', value: 'jdoe' }];
sdk.user.getAllByFilter(filter).then((users) => {
  console.log(users);
});
```

### getAllByQuery(readQueryInput: IReadQueryInput): Promise<IPagination<IModel>>

Retrieves instances of the model matching the specified query input with pagination.

```typescript
import OZMapSDK from '@ozmap/ozmap-sdk';
let sdk = new OZMapSDK('https://your-ozmap-url', { apiKey: 'your-ozmap-api-key' });

const readQueryInput = {
  filter: [{ property: 'email', operator: 'LIKE', value: '%example.com' }],
  limit: 10,
  page: 1,
};
sdk.user.getAllByQuery(readQueryInput).then((users) => {
  console.log(users);
});
```
