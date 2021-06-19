import {EnumOperator} from "./EnumOperator";

export default interface IFilter {
	property :string,
	operator :EnumOperator,
	value :string
}