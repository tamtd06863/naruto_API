import {OriginPlanetModel} from './originPlanet.model';
import {TranformationModel} from './tranformations.model';

export interface CharacterItemModel {
  id: number,
  name: string,
  description: string,
  image: string,
  ki: string,
  maxKi: string,
  race: string,
  gender: string,
  affiliation: string,
  deleteAt: string,
  originPlanet?: OriginPlanetModel,
  transformations?: TranformationModel[],
}
