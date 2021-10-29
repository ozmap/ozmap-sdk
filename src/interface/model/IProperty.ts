import IModel from './IModel';
import ObjectID from 'bson-objectid';
import IProject from './IProject';
import IClient from './IClient';
import IConnection from '../IConnection';

interface IClientLog {
  clients: [IClientLogData];
}

interface IClientLogData {
  id?: string;
  code?: string;
  enter_date?: Date | string;
  exit_date?: Date | string;
}

export default interface IProperty extends IModel {
  history?: IClientLog;
  observation?: string;
  drop?: ObjectID;
  tags?: [unknown];
  cables?: [ObjectID];
  kind?: string;
  coords?: Coords[];
  address?: string;
  box?: ObjectID;
  client?: IClient;
  project?: IProject;
  potencyRead?: number;
  pole?: ObjectID;
  createdAt?: Date;
  updatedAt?: Date;
  lng?: number;
  lat?: number;
  connections?: [IConnection];
}
