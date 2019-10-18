import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatService } from '../../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


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
  category: any;
  categorylist: any;
  categoryId: any;


  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private catservice: CatService) {
  }

  ngOnInit() {
  //  this.getcategory();
  }

  // getcategory() {
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

  // }

  Go(id) {
    this.router.navigate(['category', id])
  }
}
