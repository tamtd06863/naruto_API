import { CharacterState } from '../state/character.state';
import { CharacterModel } from '../../models/character.model';
import { createReducer, on } from '@ngrx/store';
import * as CharacterActions from '../actions/character.actions';
import {CharacterItemModel} from '../../models/characterItemModel.model';

export const initialCharacterState: CharacterState = {
  charactersList: <CharacterModel>{},
  characterDetail: <CharacterItemModel>{},
  isLoading: false,
  error: null
};

export const characterReducer = createReducer(
  initialCharacterState,

  on(CharacterActions.getAllCharacters, (state, { type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(CharacterActions.getAllCharactersSuccess, (state, {characterList, type }) => {
    console.log(type);
    console.log("Reducer",characterList);
    return {
      ...state,
      charactersList: characterList,
      isLoading: false
    };
  }),

  on(CharacterActions.getAllCharactersFailure, (state, { error, type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    };
  }),

  on(CharacterActions.getCharacterById, (state, { id, type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(CharacterActions.getCharacterByIdSuccess, (state, { characterDetail, type }) => {
    console.log(type);
    return {
      ...state,
      characterDetail: characterDetail,
      isLoading: false
    };
  }),

  on(CharacterActions.getCharacterByIdFailure, (state, { error, type }) => {
    console.log(type);
    return {
      ...state,
      isLoading: false,
      error: error
    };
  })
);
