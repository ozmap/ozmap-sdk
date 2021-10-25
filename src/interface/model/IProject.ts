import ICoords from "../ICoords";
import IModel from "./IModel";
import ObjectID from "bson-objectid";

export default interface IProject extends IModel {
  area: { coordinates: [Array<ICoords>]; type: string };
  lat: number;
  lng: number;
  parents: Array<{ project: ObjectID }>;
  name: string;
  drop: { maxSize: number; defaults: { cableType: ObjectID } };
  defaultPonPotency: number;
  createdAt: Date;
  updatedAt: Date;
  hierarchyLevels: {
    box: number; //{ POP: 1, CE: 2, CTO: 3 },
    cable: number; //{ 'PRIMÁRIO': 1, 'SECUNDÁRIO': 2, DROP: 3, 'TERCIÁRIO': 4 }
  };
}
