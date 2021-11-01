import IModel from './IModel';
import ObjectID from 'bson-objectid';
import INetworkConnector from './INetworkConnector';

export default interface INetworkConnectable extends IModel {
  connectors: (ObjectID | INetworkConnector)[];
  name: string;
  project: ObjectID;
  parent: ObjectID;
  kind: string;
  id?: ObjectID;
}
