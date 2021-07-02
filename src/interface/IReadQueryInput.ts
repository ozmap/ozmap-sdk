// model, limit, page, filter, select, sort, populate

import IFilter from "./IFilter";
import IModel from "./model/IModel";

export default interface IReadQueryInput {
	model :string |IModel,
	limit? :number,
	page? :number,
	filter? :Array<IFilter>,
	select? :string,
	sort? :string,
	populate? :string
}