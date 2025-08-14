import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {CharacterService} from '../../service/character/character.service';
import * as CharacterActions from '../actions/character.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {CharacterModel} from '../../models/character.model';
import {CharacterItemModel} from '../../models/characterItemModel.model';

export const characterEffects = createEffect(
(action$ = inject(Actions), characterService = inject(CharacterService)) => {
  return action$.pipe(
    ofType(CharacterActions.getAllCharacters),
    switchMap(() =>
    characterService.getAllCharacters().pipe(
      map((character: CharacterModel) => CharacterActions.getAllCharactersSuccess({characterList: character})),
      catchError((error: {error: any}) =>
        of(CharacterActions.getAllCharactersFailure({error: error }))
        )
      )
    )
  );
},
  { functional: true }
)

export const characterDetailEffect = createEffect(
  (action$ = inject(Actions), characterService = inject(CharacterService)) => {
    return action$.pipe(
      ofType(CharacterActions.getCharacterById),
      switchMap((actions) =>
        characterService.getCharacterById(actions.id).pipe(
          map((characterDetail: CharacterItemModel) => CharacterActions.getCharacterByIdSuccess({characterDetail: characterDetail})),
          catchError((error: {error: any}) =>
            of(CharacterActions.getCharacterByIdFailure({error: error }))
          )
        )
      )
    );
  },
  { functional: true }
)


