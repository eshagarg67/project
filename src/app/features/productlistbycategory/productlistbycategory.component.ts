import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './productlistbycategory.component.html',
  styleUrls: ['./productlistbycategory.component.css']
})
export class ProductlistbycategoryComponent implements OnInit {
productlist:any;
categoryId:any;
category:any;
categorylist:any;
//val:any;
  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private catservice: CatService) { 
    this.route.params.subscribe(param => {
      this.categoryId= parseInt(param['id']);
      console.log(this.categoryId);
      this.getproductlistbycategoryid();
    });
  }

  ngOnInit() {
    
    this.getcategory();
    this.getdetailbyid();
  }
  getproductlistbycategoryid() {
    
      this.catservice.productbycategory(this.categoryId).subscribe(data=>{
          this.productlist=data.body;
      },
      error=>{
   
      
      });
    
  
  
  }

  getdetailbyid() {
    
    this.catservice.detailbyid(this.categoryId).subscribe(data=>{
        this.categorylist=data.body;
         //this.val=this.categorylist.categoryName
    },
    error=>{
 
    
    });
  


}

  Go(id) {
    this.router.navigate(['category',id])
}

View(id) {
  this.router.navigate(['category/product',id])
}


  getcategory() {
    this.catservice.categoryuser().subscribe(data => {
      debugger;
      if(data.statusCode===200){
        this.category = data.body;
    }
  
    else{
      this.toastr.warning('Data not found')
    }
  },
  error=>{
    this.toastr.error('Get failed', 'Get Data!')
 
  });
    
  }
}
