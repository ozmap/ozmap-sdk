import IModel from "./IModel";
import ICoords from "../ICoords";

export default interface IProspect extends IModel {
  tags?: [unknown];
  phone?: string;
  code?: string;
  address?: string;
  coords?: [ICoords];
  name?: string;
  observation?: string;
  viable?: boolean;
}
