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

  detail:any;
  productId:any;
  product:any;
  categories:any;
  count:number=1;
  
  constructor(private catservice: CatService,private route: ActivatedRoute,private toastr: ToastrService,private router: Router, private proservice: ProService) {
    this.route.params.subscribe(param => {
      this.productId= parseInt(param['id']);
      console.log(this.productId);
      this.getproductbyid();
    });
   }

  ngOnInit() {
    this.getcategory();
   
  }

  getproductbyid(){
    this.proservice.productbyid(this.productId).subscribe(data=>{
      this.product=data.body;
      console.log(this.product);
     
  },
  error=>{

  
  });

  }

  getcategory() {
    this.catservice.categoryuser().subscribe(data => {
        if (data.statusCode === 200) {
                this.categories = data.body;
                debugger;
        } else {
            this.toastr.warning('Data not found')
        }
    },
        error => {
            this.toastr.error('Get failed', 'Get Data!')

        });

}

increment(){
  if(this.count<=this.product.quantityInStock){
    this.count++;
  }
 
}
decrement(){
  if(this.count>1){
    this.count--;
  }
}

instock(){
  if(this.product.quantityInStock!=null){
    "In Stock"
  }
  else{
    "Out Of Stock"
  }
}
    
  
}
