import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../shared/services/home.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-s-header',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppHeaderComponent implements OnInit {
  count: any;
  constructor(private router: Router,private toastr: ToastrService, private homeservice: HomeService) { }

  ngOnInit() {
    this.getcategory();
  }
  getcategory() {
    this.homeservice.categoryuser().subscribe(data => {
      this.count = data.body;
      
      if (data.statusCode === 200) {

      }
    },
      error => {
        this.toastr.error('Get failed', 'Get Data!')

      });

  }

  Go(id) {
    this.router.navigate(['category',id])
}


}
