import { Component, OnInit } from '@angular/core';
import { ProService } from '../../../shared/services/./pro.service';
import { CatService } from '../../../shared/services/cat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  detail: any;
  productId: any;
  product: any;
  categoryId: any;
  category: any;
  count: number = 1;
  isDataAvailable=false;

  constructor(private catservice: CatService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private proservice: ProService) {
    this.route.params.subscribe(param => {
   
      this.productId = parseInt(param['id']);
      this.getproductbyid();
    });
  }

  ngOnInit() {
  }

  getproductbyid() {
    this.proservice.productbyid(this.productId).subscribe(data => {
      if (data.statusCode === 200){
        this.product = data.body;
        this.isDataAvailable=true;
      }
      else{
        this.toastr.warning('Data not found')
      }
      
     
    },
      error => {
        this.toastr.error('Get failed', 'Get Data!')
      });

  }

  increment() {
    if (this.count <= this.product.quantityInStock) {
      this.count++;
    }

  }
  decrement() {
    if (this.count > 1) {
      this.count--;
    }
  }



}
