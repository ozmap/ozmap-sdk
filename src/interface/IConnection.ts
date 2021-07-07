import IModel from './model/IModel';
import ObjectID from 'bson-objectid';

export default interface IConnection extends IModel {

    kind?: string
    port?: number
    name?: string
    implanted?: boolean
    fiber?: ObjectID

}
