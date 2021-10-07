import IModel from "./IModel";
import IProject from "./IProject";
import ICableType from "./ICableType";
import IBaseBox from "./IBaseBox";
import IColor from "./IColor";
import IPole from "./IPole";
import ObjectID from "bson-objectid";

export default interface IBaseCable extends IModel {
  certified: boolean;
  name: string;
  fiberNumber: number;
  index?: number;
  looseNumber: number;
  kind: ICableType;
  hierarchyLevel: number;
  color: ObjectID | string | IColor;
  tags: ObjectID[] | string[];
  cableType: ObjectID | ICableType;
  observation: string;
  poles: {
    id: IPole | ObjectID;
    reserve: number;
  }[];
  boxA: string | ObjectID | IBaseBox;
  boxB: string | ObjectID | IBaseBox;
  orientationA: string;
  orientationB: string;
  project: ObjectID | IProject;
  implanted: boolean;
  length: number;
  altitude_length: number;
  ground_length: number;
  loss: number;
}
