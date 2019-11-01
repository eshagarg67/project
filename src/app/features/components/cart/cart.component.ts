import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdetail: any[]=[];
  res:any;
  cartTotalSum=0;
  constructor() { }

  ngOnInit() {
    this.res= localStorage.getItem('cart');
    this.cartdetail= JSON.parse(this.res);
    this.calculateSum();
  }

  calculateSum(){
    this.cartTotalSum = this.cartdetail.reduce(function (prev, cur) {
      if (!cur.isWishlist) {
        return prev + (cur.quantity * cur.price);
      } else {
        return prev;
      }
    }, 0);
  }

}
