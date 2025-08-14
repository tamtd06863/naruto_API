import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItemModel.model';

export interface CharacterState {
  charactersList: CharacterModel;
  characterDetail: CharacterItemModel;
  isLoading : boolean;
  error: any;
}

