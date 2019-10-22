import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../../shared/services/cat.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './productlistbycategory.component.html',
  styleUrls: ['./productlistbycategory.component.css']
})
export class ProductlistbycategoryComponent {
  productlist: any;
  categoryId: number;
  categorylist: any;
  categoryName = '';
  categories = [];
  isDataAvailable=false;
  //val:any;
  constructor(private sharedService: SharedService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private catservice: CatService) {
    this.route.params.subscribe(param => {
      this.categoryId = parseInt(param['id']);
      this.getproductlistbycategoryid();
    
    });

    this.sharedService.categories$.subscribe((data) => {
      if (data !== null && data.length > 0) {
        this.categories = data;
      }
      
      
    });

  }

  getproductlistbycategoryid() {
    this.catservice.productbycategory(this.categoryId).subscribe(data => {
      if (data.statusCode === 200) {
        this.categoryName = data.body.categoryName;
        this.productlist = data.body.products;
        this.isDataAvailable=true;
      }
     
      else{
        this.toastr.warning("Data not found")
      }
     
    },
      error => {
        this.toastr.error('Get failed', 'Get Data!')
      });
      
  }




  Go(id) {
    this.router.navigate(['category', id])
  }

  
}
