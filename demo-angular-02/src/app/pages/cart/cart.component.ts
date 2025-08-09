import { Component } from '@angular/core';
import {ProductService} from '../services/product.service';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor(public productService: ProductService) {




  }


}
