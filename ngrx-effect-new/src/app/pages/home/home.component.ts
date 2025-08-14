import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../service/auth.service';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Store} from '@ngrx/store';
import {CharacterState} from '../../ngrx/state/character.state';
import * as characterActions from '../../ngrx/actions/character.actions';
import {Observable, Subscription} from 'rxjs';
import {CharacterModel} from '../../models/character.model';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardImage,
    MatCardActions,
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  characterList$ !: Observable<CharacterModel>
  constructor(private auth: AuthService,
              private store: Store<{
    character: CharacterState
  }>) {

    this.characterList$ = this.store.select('character', 'charactersList');

    this.store.dispatch(characterActions.getAllCharacters())
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.characterList$.subscribe((character: CharacterModel) => {
        console.log("Home",character.items);
      })
    )
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(s => s.unsubscribe());
    }


  loginWithGoogle() {
    this.auth.login().then();
  }
  logout() {
    this.auth.logout().then();
  }


}


