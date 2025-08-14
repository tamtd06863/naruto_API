import {CharacterItemModel} from './characterItemModel.model';

export interface CharacterModel{
  items:CharacterItemModel[];
  meta: object,
  links: object
}
