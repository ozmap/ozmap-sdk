import ObjectID from "bson-objectid";
import IModel from "./IModel";
import INetworkConnectable from "./INetworkConnectable";

export default interface INetworkConnector extends IModel{
	parent: ObjectID;
	isDrop: boolean;
	isBalanced?: boolean;
	project: ObjectID;
	connectables: { input: INetworkConnectable[], output: INetworkConnectable[] };
	attenuation: number[];
	name: string;
	kind: EnumConnectorsType;
	id?: ObjectID;
	shelf?: ObjectID | string;
	implanted: boolean;
	orientation?: string;
	observation?:string;
	index?: number,
}