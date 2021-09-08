import ObjectID from "bson-objectid";
import IModel from "./IModel";

export default interface IColor extends IModel  {
	name: string;
	color: string;
}
