import { Component, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Component({
    selector: 'add-to-cart',
    templateUrl: './addtocart.component.html',
    styleUrls: ['./addtocart.component.css']
})
export class AddToCartComponent {
    res: any;
    user: any;

    @Input() product = null;
    @Input() quantity = 0;
    @Input() isWishlist = false;
    constructor() {

    }
    addTocart() {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if (isNullOrUndefined(user)) {
            // redirect to login
        } else {

            let cartItems = JSON.parse(localStorage.getItem('cart'));
            if (cartItems === null) {
                cartItems = [];
            } else{
               const item =  cartItems.find(x=>x.productId=== this.product.productId);
                 if(!isNullOrUndefined(item)){
                    item.quantity =this.quantity;
                    const newitem= Object.assign({},item);
                    cartItems.splice(newitem,1)
                 }
            }
            
            

            const cart = {
                cartId: Math.floor(Math.random() * 1000),
                userId: user.userId,
                productId: this.product.productId,
                prodcutName: this.product.productName,
                image: this.product.productImage,
                quantity: this.quantity,
                isWishlist: this.isWishlist
            }

            cartItems.push(cart);
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(cartItems));
        }
    }
}
