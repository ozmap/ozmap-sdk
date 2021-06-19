// model, limit, page, filter, select, sort, populate

import IFilter from "./IFilter";

export default interface IReadQueryInput {
	model :any,
	limit? :any,
	page? :any,
	filter? :IFilter[],
	select? :any,
	sort? :any,
	populate? :any
}