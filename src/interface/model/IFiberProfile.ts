import IModel from "./IModel";

export default interface IFiberProfile extends IModel {
  defaultFiberColor: string;
  defaultTubeColor: string;
  fibers: { color: string }[];
  tubes: { color: string }[];
}
