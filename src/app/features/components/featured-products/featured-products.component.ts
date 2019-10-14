import { Component, OnInit } from '@angular/core';
import { ProService } from '../../../shared/services/pro.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-featured-products',
    templateUrl: './featured-products.component.html'
})
export class FeaturedProductsComponent implements OnInit {

    products = [];
    constructor(private toastr: ToastrService, private proservice: ProService) {

    }

    ngOnInit() {
        this.getproduct();
    }

    getproduct() {
        this.proservice.productuser().subscribe(data => {
            if (data.statusCode === 200) {
                if (data.body !== null || data.body !== undefined) {
                    console.log(data);
                    this.products = data.body;
                //  this.productImg = "data:image/png;base64," + this.products.productImage;
                }
            } else {
                this.products=[];
                this.toastr.warning('Data not found')
            }
        },
            error => {
                this.toastr.error('Get failed', 'Get Data!')

            });

    }
}

