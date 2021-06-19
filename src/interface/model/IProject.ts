import Coords from "../Coords";
import IModel from "./IModel";

export default interface IProject extends IModel {
	area :{ coordinates :[Array<Coords>], type :string }
	lat :number
	lng :number
	parents :Array<{ project :string }>
	name :string
	drop :{ maxSize :number, defaults :{ cableType :string } }
	defaultPonPotency :number
	createdAt :Date
	updatedAt :Date
	hierarchyLevels :{
		box :any //{ POP: 1, CE: 2, CTO: 3 },
		cable :any //{ 'PRIMÁRIO': 1, 'SECUNDÁRIO': 2, DROP: 3, 'TERCIÁRIO': 4 }
	}
}
