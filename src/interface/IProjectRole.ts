import ObjectID from "bson-objectid";

export default interface IProjectRole {
  project: ObjectID;
  role: ObjectID;
}
