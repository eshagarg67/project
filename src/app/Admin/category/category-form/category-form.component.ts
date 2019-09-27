import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { CategoryService } from '../category.service';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryformmodel: any = {
    categoryName: '', categoryDescription: '',
  };
  submitted: any = false;
  userForm: NgForm;
  file: any;
  count: any;
  Id: any;
  list: any;

  constructor(private toastr: ToastrService,private router: Router, private categoryservice: CategoryService) { }

  ngOnInit() {
    
  }


  onSubmit(data) {

    if (data.valid) {
      this.sendRequest(data.value);
    }
    this.submitted = true;
  }

  getUserId() {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (!isNullOrUndefined(user)) {
      return user.userId;
    }
  }

  sendRequest(formValue) {
    formValue.createdBy = this.getUserId();
    const formdata = new FormData();
    const scope = this;
    formdata.append('category', JSON.stringify(formValue));

    formdata.append('file', this.file);

    const objXhr = new XMLHttpRequest();
    objXhr.open('POST', "/api/category/insert");
    objXhr.onreadystatechange = function (aEvt) {
      if (objXhr.readyState === 4) {
        debugger;
        if (objXhr.status === 200) {
          const response = JSON.parse(objXhr.response);
          console.log(response);
          if (response.status === 1) {
            scope.router.navigate(["/admin/categories"]);
          } else {
            scope.toastr.warning('Request failed','ohh!')
          }
        } else {

          scope.handleError(objXhr);
        }
      }
    };
    objXhr.send(formdata);
  }

  handleError(objXhr: XMLHttpRequest) {
   this.toastr.error('error','ohh!')
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

 
  
  

}
