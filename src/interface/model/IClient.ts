import IModel from './IModel';
import IONU from './IONU';

export default interface IClient extends IModel {
  certified?: boolean;
  status?: number;
  observation?: string;
  tags?: Array<unknown>;
  onu?: IONU;
  implanted?: boolean;
  kind?: string;
  code?: string;
  name?: string;
  project?: string;
}
