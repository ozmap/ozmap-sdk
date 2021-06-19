import Coords from "../Coords";
import IModel from "./IModel";

export default interface IBox extends IModel {
	shared :boolean
	draft :boolean
	default_reserve :number
	certified :boolean
	tags :Array<string>
	coords :Coords
	cables :Array<string>
	kind :Kind
	project :string
	implanted :true
	hierarchyLevel :3
	boxType :string
	color :any
	fill_color :any
	name :string
	observation :string
	pole :string
	createdAt :Date
	updatedAt :Date
	lng :number
	lat :number
}