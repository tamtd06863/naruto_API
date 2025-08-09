import { Component } from '@angular/core';

import {ProductService} from '../services/product.service';
import {CardComponent} from '../../Component/card/card.component';
import {ProductModel} from '../../models/product.model';



@Component({
  selector: 'app-home',
  imports: [

    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cardListHome!: ProductModel[];
 constructor(public productService: ProductService) {
   this.cardListHome = this.productService.productList;
 }
}
