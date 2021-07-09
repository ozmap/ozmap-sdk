import IModel from './IModel';
import ObjectID from 'bson-objectid';
import ICoords from '../ICoords';
import IProject from './IProject';
import IClient from './IClient';
import IConnection from '../IConnection';

interface IClientLog {
    clients: [IClientLogData]
}

interface IClientLogData {
    id?: string
    code?: string
    enter_date?: any
    exit_date?: any
}

export default interface IProperty extends IModel {

    history?: IClientLog
    observation?: string
    drop?: ObjectID
    tags?: [any]
    cables?: [ObjectID]
    kind?: string
    coords?: [ICoords]
    address?: string
    box?: ObjectID
    client?: IClient
    project?: IProject
    potencyRead?:number
    pole?: ObjectID
    createdAt?: Date
    updatedAt?: Date
    lng?: number,
    lat?: number,
    connections?: [IConnection]

}
