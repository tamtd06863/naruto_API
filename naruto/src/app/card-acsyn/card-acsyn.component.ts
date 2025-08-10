import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {characterModel} from '../models/character.model';
import {GokuService} from '../services/goku.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-card-acsyn',
  imports: [
    AsyncPipe
  ],
  templateUrl: './card-acsyn.component.html',
  styleUrl: './card-acsyn.component.scss'
})
export class CardAcsynComponent {
  myData$ = new Observable<characterModel>

  constructor(private gokuService: GokuService) {
    this.myData$ = this.gokuService.getData();
  }


}

