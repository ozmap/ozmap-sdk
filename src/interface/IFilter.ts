import {EnumOperator} from "./EnumOperator";
import ObjectID from "bson-objectid";

export default interface IFilter {
	property :string,
	operator :EnumOperator,
	value :string|Array<string>|Array<ObjectID>|ObjectID
}