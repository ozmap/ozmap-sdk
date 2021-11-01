import IModel from './IModel';

export default interface IProspect extends IModel {
  tags?: unknown[];
  phone?: string;
  code?: string;
  address?: string;
  coords?: Coords[];
  name?: string;
  observation?: string;
  viable?: boolean;
}
