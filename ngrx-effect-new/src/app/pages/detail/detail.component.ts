import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {Store} from '@ngrx/store';
import {CharacterState} from '../../ngrx/state/character.state';
import {ActivatedRoute} from '@angular/router';
import {CharacterItemModel} from '../../models/characterItemModel.model';
import {Observable} from 'rxjs';
import * as characterActions from '../../ngrx/actions/character.actions';
import {AsyncPipe} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-detail',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatProgressSpinner,
    AsyncPipe,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  isLoadingCharacterDetail$!: Observable<boolean>;
  characterDetail$ !: Observable<CharacterItemModel>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{
    character: CharacterState
  }>)   {
    let {id} = this.activatedRoute.snapshot.params;
    this.characterDetail$ = this.store.select('character', 'characterDetail');
    this.store.dispatch(characterActions.getCharacterById({id: id}));
    this.characterDetail$.subscribe((character: CharacterItemModel) => {
      console.log("Detail", character);
    })
  }

}
