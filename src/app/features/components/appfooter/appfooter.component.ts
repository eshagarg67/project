import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatService } from '../../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-footer',
  templateUrl: './appfooter.component.html',
  styleUrls: ['./appfooter.component.scss']
})
export class AppFooterComponent implements OnInit {
  footermodel: any = {
    uemail: '', upassword: '',
  };
  submitted: any = false;
  userForm: NgForm;
  categories: any;
  categorylist: any;
  categoryId: any;


  constructor(private sharedService: SharedService,private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private catservice: CatService) {
    this.sharedService.categories$.subscribe((data) => {
      if (data !== null && data.length > 0) {
          this.getcategory(data);
      }
  });
  }

  ngOnInit() {
  //  this.getcategory();
  }

   getcategory(data) {
    this.categories = data;
  //   this.catservice.categoryuser().subscribe(data => {
  //     debugger;
  //     if (data.statusCode === 200) {
  //       this.category = data.body;
  //     }

  //     else {
  //       this.toastr.warning('Data not found')
  //     }
  //   },
  //     error => {
  //       this.toastr.error('Get failed', 'Get Data!')

  //     });

   }

  Go(id) {
    debugger;
    this.router.navigate(['category', id])
  }
}
