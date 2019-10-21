import { Component, OnInit } from '@angular/core';
import { ProService } from '../../../shared/services/pro.service';
import { CatService } from '../../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-featured-products',
    templateUrl: './featured-products.component.html'
})
export class FeaturedProductsComponent implements OnInit {
    categories = [];
    products = [];
    categoryId: any;
    categorylist: any;
    originalProducts = [];
    toggle :number=-1;
    constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService, private proservice: ProService, private catservice: CatService) {
      
    }


    ngOnInit() {
        this.getproduct();
        this.getcategory();
    }

    getproduct() {
        this.proservice.productuser().subscribe(data => {
            if (data.statusCode === 200) {
                if (data.body !== null || data.body !== undefined) {
               //     debugger;
                    console.log(data);
                    this.products = data.body;
                    this.originalProducts = data.body;
                    //  this.productImg = "data:image/png;base64," + this.products.productImage;
                }
            } else {
                this.products = [];
                this.toastr.warning('Data not found')
            }
        },
            error => {
                this.toastr.error('Get failed', 'Get Data!')

            });

    }


    Filter(id) {
        debugger;
        this.products = this.originalProducts;
        this.products = this.products.filter(x => x.categoryId === id);

    }


    getcategory() {
        this.catservice.categoryuser().subscribe(data => {
            if (data.statusCode === 200) {
                if (data.body !== null || data.body !== undefined) {
                    console.log(data);
                    this.categories = data.body;
                }
            } else {
                this.categories = [];
                this.toastr.warning('Data not found')
            }
        },
            error => {
                this.toastr.error('Get failed', 'Get Data!')

            });
    }

    setActive(index){
        this.toggle=index;   
    }

}

