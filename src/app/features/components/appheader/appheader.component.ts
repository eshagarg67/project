import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-s-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppHeaderComponent implements OnInit {
  categories = [];
  updatecount:[];
  toggle :number=-1;
  res:any;
  productitem:any;
  totalCount: any = 0;
    constructor(private router: Router, private toastr: ToastrService, private homeservice: HomeService,
    private sharedService: SharedService) { 
      this.sharedService.updatecount$.subscribe((data) => {
        if (data !== null && data.length > 0) {
            this.getproductcount();
        }
    });
    }

  ngOnInit() {
    this.getcategory();
   this.getproductcount();
  }
  getcategory() {
    this.homeservice.categoryuser().subscribe(data => {
      if (data.statusCode === 200) {
        this.categories = data.body;
        this.sharedService.setCategories(this.categories);
      }
    },
      error => {
        this.categories = [];
        this.sharedService.setCategories(this.categories);
        this.toastr.error('Get failed', 'Get Data!')

      });

  }

  
  navigate() {
    this.router.navigate([''])
  }

  getproductcount() {
    debugger;
      this.res= localStorage.getItem('cart');
      debugger;
    this.productitem=JSON.parse(this.res);
    // for(let i = 0; i < this.productitem.length; i ++) {
    //   if(this.productitem[i].cartId > 0) {
    //     this.totalCount = this.productitem[i].quantity + this.totalCount
    //     console.log(this.totalCount);
    //   }
    // }
  }

  

}
