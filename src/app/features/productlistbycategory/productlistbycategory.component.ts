import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../../shared/services/cat.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-category-detail',
  templateUrl: './productlistbycategory.component.html',
  styleUrls: ['./productlistbycategory.component.css']
})
export class ProductlistbycategoryComponent {
  productlist: any;
  categoryId: number;
  categorylist: any;
  categories = [];
  isDataAvailable=false;
  visible=false;
  categoryName$ = new BehaviorSubject<string>('');

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
    this.visible = true;
    this.catservice.productbycategory(this.categoryId).pipe(delay(3000)).subscribe(data => {
      if (data.statusCode === 200) {
        this.categoryName$.next(data.body.categoryName);
        this.productlist = data.body.products;
        this.isDataAvailable=true;
        this.visible = false;
      }
     
      else{
        this.toastr.warning("Data not found")
      }
     
    },
      error => {
        this.toastr.error('Get failed', 'Get Data!')
        this.visible = false;
      });
     
      
  }




  Go(id) {
    this.router.navigate(['category', id])
  }

  
}
