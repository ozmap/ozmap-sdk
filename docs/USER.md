# IUser Model

## Properties

- **allProjects** (`boolean`, optional): Indicates if the user has access to all projects.
- **resources** (`Array<EnumResources>`, optional): An array of resources associated with the user.
  - **EnumResources**(`Enum`): OZMAP = 'OZmap', OZMOB = 'OZmob', LOKI = 'Loki', API = 'API'
- **username** (`string`): The username of the user.
- **email** (`string`): The email address of the user.
- **password** (`string`, optional): The password of the user.
- **name** (`string`): The full name of the user.
- **observation** (`string`): Observations or comments about the user.
- **role** (`ObjectID`): The role identifier of the user.
- **projects** (`Array<IProjectRole>`): An array of project roles associated with the user.
- **createdAt** (`Date`, optional): The date the user was created.
- **updatedAt** (`Date`, optional): The date the user was last updated.
- **locale** (`string`, optional): The locale of the user.
- **status** (`number`, optional): The status of the user.
- **phone** (`string`, optional): The phone number of the user.

## Imported Interfaces

- **IModel**: The base model interface.
- **ObjectID**: Represents a MongoDB ObjectID.
- **IProjectRole**: Interface for the project roles associated with the user.
- **EnumResources**: Enum for the resources associated with the user.

## Example Usage

```typescript
const exampleUser: IUser = {
  allProjects: true,
  resources: ['RESOURCE_1', 'RESOURCE_2'],
  username: 'jdoe',
  email: 'jdoe@example.com',
  password: 'securepassword123',
  name: 'John Doe',
  observation: 'Lead developer',
  role: ObjectID,
  projects: [
    {
      projectId: ObjectID,
      role: 'Admin',
    },
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
  locale: 'en-US',
  status: 1,
  phone: '555-1234',
};
```
