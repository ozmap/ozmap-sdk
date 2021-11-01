import IProject from './IProject';
import IPoleType from './IPoleType';
import ObjectID from 'bson-objectid';
import { EnumPointType } from '../EnumPointType';

export default interface IPole {
  isAereo: boolean;
  project: ObjectID | IProject;
  name: string;
  coords: number[];
  lat?: number;
  lng?: number;
  adjacents: (IPole | ObjectID)[];
  usable: boolean;
  kind: EnumPointType;
  poleType: ObjectID | IPoleType;
  observation: string;
}
