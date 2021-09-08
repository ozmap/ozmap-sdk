import IModel from "./IModel";
import ObjectID from "bson-objectid";

export default interface IBoxType extends IModel {
	code: string;
	brand: string;
	mold: string;
	description: string;
	default_template: ObjectID;
	config: {
		base: {
			color: string,
		},
		regular: {
			fillColor: string,
		},
		not_implanted: {
			fillColor: string,
		},
		draft: {
			fillColor: string
		}
	};
}
