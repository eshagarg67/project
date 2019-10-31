import { Component, AfterViewInit, OnDestroy, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { isNullOrUndefined } from 'util';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'add-to-cart',
    templateUrl: './addtocart.component.html',
    styleUrls: ['./addtocart.component.css']
})
export class AddToCartComponent {
    res: any;
    user: any;
    updatecount: any;
    @Input() product = null;
    @Input() quantity = 0;
    @Input() isWishlist = false;
    constructor(private toastr: ToastrService,private router: Router, private sharedService: SharedService) {

    }
    addTocart() {
        const user = JSON.parse(localStorage.getItem('userInfo'));
        if (isNullOrUndefined(user)) {
            this.router.navigate(['login']);
        } else {

            let cartItems = JSON.parse(localStorage.getItem('cart'));
            if (cartItems === null) {
                cartItems = [];
            }

            const itemIndex = cartItems.findIndex(x => x.productId === this.product.productId);
            if (!isNullOrUndefined(itemIndex) && itemIndex > -1) {
                const item = cartItems.find(x => x.productId === this.product.productId)
                const newitem = Object.assign({}, item);
                newitem.quantity = item.quantity + this.quantity;

                cartItems.splice(itemIndex, 1);
                cartItems.push(newitem);
            } else {
                const cart = {
                    cartId: Math.floor(Math.random() * 1000),
                    userId: user.userId,
                    productId: this.product.productId,
                    prodcutName: this.product.productName,
                    image: this.product.productImage,
                    quantity: this.quantity,
                    isWishlist: this.isWishlist
                };
                cartItems.push(cart);
            }
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(cartItems));

            this.toastr.success('Product Added')
            this.sharedService.setupdatecount();
        }
    }
}
