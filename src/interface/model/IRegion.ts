import IModel from './IModel';
import IProject from './IProject';

export interface Polygon {
    type: "Polygon",
    coordinates: [[[number]]]
}

export default interface Region extends IModel{
    polygon: Polygon,
    name: string,
    observation: string,
    color: string,
    regionType: string,
    project: IProject
}