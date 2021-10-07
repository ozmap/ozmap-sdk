import IModel from "./IModel";

export default interface IONU extends IModel {
  user_PPPoE?: string;
  serial_number?: string;
  mac_address?: string;
}
