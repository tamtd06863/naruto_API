import { Injectable } from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getDetailProduct(id: string): ProductModel {
    let product = this.productList.find(item => item.id === id)
    if (product){
      return product;
    }else{
      return {} as ProductModel;
    }
  }

  cartList: ProductModel[] = [] ;

  addProductToCart(id: string) {
    let product = this.productList.find(item => item.id === id);
    if(product)
    {
      let productInCart = this.cartList.find(item => item.id === id);
      if(productInCart){
        console.log(productInCart)

        product.quantity += 1;

      }
      else
      {

        product.quantity += 1;
        this.cartList.push(product);
      }
    }
    console.log(this.cartList);
  }


  productList: ProductModel[] = [
    {
      id: "1",
      name: 'AIR FORCE 1',
      price: 3200000,
      imgurl: 'https://kingshoes.vn/data/upload/thumb/sneaker-315122-111-air-force-1-07-nike-kingshoesvn-tphcm-tanbinh-17-logo-1551924204-jpg/500_SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-17-logo-1551924204-.jpg.webp',
      quantity: 0,
    },

    {
      id: "2",
      name: 'NIKE AIR MAX NUAXIS',
      price: 2200000,
      imgurl: 'https://kingshoes.vn/data/upload/thumb/fd4329-002-giay-nike-air-max-nuaxis-gia-tot-den-king-shoes-12jpeg/500_fd4329-002-giay-nike-air-max-nuaxis-gia-tot-den-king-shoes-12.jpeg.webp',
      quantity: 0,
    },

    {
      id: "3",
      name: 'NIKE JOURNEY RUN',
      price: 3200000,
      imgurl: 'https://kingshoes.vn/data/upload/thumb/ib4663-121-giay-nike-journey-run-gia-tot-den-king-shoes-12jpeg/500_ib4663-121-giay-nike-journey-run-gia-tot-den-king-shoes-12.jpeg.webp',
      quantity: 0,
    },
  ]
}
