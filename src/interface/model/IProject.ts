import IModel from './IModel';
import ObjectID from 'bson-objectid';

export default interface IProject extends IModel {
  area: { coordinates: Coords[]; type: string };
  lat: number;
  lng: number;
  parents: Array<{ project: ObjectID }>;
  name: string;
  drop: { maxSize: number; defaults: { cableType: ObjectID } };
  defaultPonPotency: number;
  createdAt: Date;
  updatedAt: Date;
  hierarchyLevels: {
    box: Record<string, number>;
    cable: Record<string, number>;
  };
}
