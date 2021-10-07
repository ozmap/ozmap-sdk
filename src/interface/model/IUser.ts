import IProjectRole from "../IProjectRole";
import ObjectID from "bson-objectid";
import IModel from "./IModel";
import { EnumResources } from "../EnumResources";

export default interface IUser extends IModel {
  allProjects?: boolean;
  resources?: Array<EnumResources>;
  username: string;
  email: string;
  password?: string;
  name: string;
  observation: string;
  role: ObjectID;
  projects: Array<IProjectRole>;
  createdAt?: Date;
  updatedAt?: Date;
  locale?: string;
  status?: number;
  phone?: string;
}
