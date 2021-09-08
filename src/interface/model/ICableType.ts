import IModel from "./IModel";
import IFiberProfile from "./IFiberProfile";
import ObjectID from "bson-objectid";

export default interface ICableType extends IModel {
	description: string;
	fiberNumber: number;
	looseNumber: number;
	base_loss: number;
	brand: string;
	mold: string;
	code: string;
	config: {
		regular: {
			weight: number;
			color: string;
		},
		not_implanted: {
			weight: number;
			color: string;
		}
	},
	fiberProfile: ObjectID | IFiberProfile;
}
