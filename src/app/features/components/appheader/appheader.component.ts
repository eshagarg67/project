import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-s-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppHeaderComponent implements OnInit {
  value: any = null;
  user: any;
  categories = [];
  updatecount: [];
  toggle: number = -1;
  cartItemsCount: any;
  productitem: any;
  totalCount: any = 0;
  constructor(private router: Router, private toastr: ToastrService, private homeservice: HomeService,
    private sharedService: SharedService) {
    this.sharedService.updatecount$.subscribe((data) => {
      this.cartItemsCount = data;
    });
  }

  ngOnInit() {
    this.value = localStorage.getItem('userInfo')!==null ? JSON.parse(localStorage.getItem('userInfo')): null;
    this.getcategory();
    this.sharedService.setupdatecount();
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

  login() {
    this.router.navigate(['/login'])
  }
}
