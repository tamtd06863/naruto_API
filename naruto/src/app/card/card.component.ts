import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {GokuService} from '../services/goku.service';
import {characterItemModel, characterModel} from '../models/character.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, OnDestroy {
  cardItem: characterItemModel[] = [];
  myData$ = new Observable<characterModel>
  // chaPersonal$: Observable<characterModel>
  subscriptions: Subscription[] = [];

  constructor(private gokuService: GokuService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.myData$ = this.gokuService.getData();
    // this.chaPersonal$ = this.gokuService.personalData();
    console.log(this.myData$);


  }



  navigateToDetail(id: number) {
    this.router.navigate([
      `detail/${id}`
    ]);
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.myData$.subscribe((item: characterModel) => {

        this.cardItem = item.characters;
        console.log(this.cardItem);

      })

    )

  }



  ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
          subscription.unsubscribe();
        })
    }


}
