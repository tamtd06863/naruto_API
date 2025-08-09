import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {ProductModel} from '../../models/product.model';
import {Router} from '@angular/router';
import {ProductService} from '../../pages/services/product.service';

@Component({
  selector: 'app-card',
    imports: [
        MatButton,
        MatCard,
        MatCardActions,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle,
        MatCardTitle
    ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 @Input() products!: ProductModel[];


  constructor(
    private router: Router,
    private productService: ProductService ){

  }



  navigateToDetail(id: string) {
    this.router.navigate([`./pages/detail/${id}`]).then();
  }

  navigateToCart() {
   this.router.navigate(['/cart']).then();
  }

  addProductToCart(id: string){
    console.log(id);
    this.productService.addProductToCart(id);

  }
}
