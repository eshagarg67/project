import { Component, OnInit } from '@angular/core';
import { ProService } from '../../../shared/services/./pro.service';
import { CatService } from '../../../shared/services/cat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  detail: any;
  productId: any;
  product: any=null;
  categoryId: any;
  category: any;
  count: number = 1;
  products:any;
  visible=false;

  constructor(private catservice: CatService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private proservice: ProService) {
    this.route.params.subscribe(param => {
      this.visible=true;
      this.productId = parseInt(param['id']);
      this.getproductbyid();
    });
  }

  ngOnInit() {
    this.getproduct();
  }

  getproductbyid() {
   
    this.proservice.productbyid(this.productId).pipe(delay(2000)).subscribe(data => {
      if (data.statusCode === 200){
        this.product = data.body;
        this.visible=false;
      }
      else{
        this.toastr.warning('Data not found')
      }
      
     
    },
      error => {
        this.toastr.error('Get failed', 'Get Data!')
        this.visible=false;
      });

  }

  getproduct() {
    this.proservice.productuser().subscribe(data => {
        if (data.statusCode === 200) {
            if (data.body !== null || data.body !== undefined) {
      
                this.products = data.body;
            }
        } else {
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
