import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {GokuService} from '../services/goku.service';
import {Observable} from 'rxjs';
import {characterItemModel} from '../models/character.model';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [
    // AsyncPipe
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  characterDetail$ = new Observable<characterItemModel>;

  characterDetail?: characterItemModel;

  constructor(private activeRouter: ActivatedRoute,
              private gokuService: GokuService) {
    let {id} = this.activeRouter.snapshot.params;
    this.characterDetail$ = this.gokuService.getCharacterById(id)
    this.characterDetail$.subscribe(characterDetail => {
      this.characterDetail = characterDetail;
      console.log(this.characterDetail);
    })
    console.log(this.characterDetail)

  }

  // @ViewChild('collapsibleButton') collapsibleButton!: ElementRef<HTMLButtonElement>;
  // @ViewChild('collapsibleContent') collapsibleContent!: ElementRef<HTMLDivElement>;
  //
  // ngAfterViewInit(): void {
  //   this.collapsibleButton.nativeElement.addEventListener('click', () => {
  //     this.collapsibleButton.nativeElement.classList.toggle('active');
  //     const content: HTMLDivElement = this.collapsibleContent.nativeElement;
  //     content.style.display = content.style.display === 'block' ? 'none' : 'block';
  //   });
  // }
}
