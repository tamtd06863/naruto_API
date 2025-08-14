import {createAction, props} from '@ngrx/store';
import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItemModel.model';

export const getAllCharacters = createAction(
  '[Character] Get All Characters'
)

export const getAllCharactersSuccess = createAction(
  '[Character] Get All Characters Success',props<{characterList: CharacterModel}>()
)

export const getAllCharactersFailure = createAction(
  '[Character] Get All Characters Failure', props<{error: any}>()
)

export const getCharacterById = createAction(
  '[Character] Get Character By Id', props<{id: number}>()
)

export const getCharacterByIdSuccess = createAction(
  '[Character] Get Character By Id Success', props<{characterDetail: CharacterItemModel}>()
)

export const getCharacterByIdFailure = createAction(
  '[Character] Get Character By Id Failure', props<{error: any}>()
)


