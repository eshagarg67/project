import { Component, OnInit } from '@angular/core';
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
  toggle :number=-1;
  constructor(private router: Router, private toastr: ToastrService, private homeservice: HomeService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.getcategory();
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

  

}
