import { Component, OnInit } from '@angular/core';
import { ProService } from '../../../shared/services/./pro.service';
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
  
  constructor(private route: ActivatedRoute,private toastr: ToastrService,private router: Router, private proservice: ProService) {
    this.route.params.subscribe(param => {
      this.productId= parseInt(param['id']);
      console.log(this.productId);
      this.getproductbyid();
    });
   }

  ngOnInit() {
   
  }

  getproductbyid(){
    this.proservice.productbyid(this.productId).subscribe(data=>{
      this.product=data.body;
      console.log(this.product);
     
  },
  error=>{

  
  });

  }
    
  
}
