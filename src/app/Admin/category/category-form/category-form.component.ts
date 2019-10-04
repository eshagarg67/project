import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { CategoryService } from '../category.service';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryformmodel: any = {
    categoryName: '', categoryDescription: ''
  };
  submitted: any = false;
  userForm: NgForm;
  file: any;
  count: any;
  Id: any;
  list: any;
  edit: any;
  categoryId = -1;
  image = '';
  //image:any;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private categoryservice: CategoryService) {
  }

  ngOnInit() {
    this.getcategoryid();
  }

  getcategoryid() {
    this.route.params.subscribe(param => {
      if (!isNullOrUndefined(param['id'])) {
        this.categoryId = parseInt(param['id']);
        this.categoryservice.getedit(this.categoryId).subscribe(data => {
          this.categoryformmodel = data.body;
          if (this.categoryformmodel.categoryImage != null) {
            this.image = "data:image/png;base64," + this.categoryformmodel.categoryImage;
            this.file=null;
          }
        })
      }
    }, error => {
    });
  }

  onSubmit(data) {
    if (data.valid && this.file !== undefined) {
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

    const uid = this.getUserId();
    if (this.categoryId === -1) {
      formValue.createdBy = uid;
    }
    else {
      formValue.categoryId = this.categoryId;
      formValue.modifiedBy = uid;
    }
    const formdata = new FormData();
    const scope = this;
    formdata.append('category', JSON.stringify(formValue));

    if (this.file) {
      formdata.append('file', this.file);
    }
    const objXhr = new XMLHttpRequest();
    if (this.categoryId === -1) {
      objXhr.open('POST', "/api/category/insert");
    }
    else {
      objXhr.open('PUT', "/api/category/update");
    }

    objXhr.onreadystatechange = (aEvt) => {
      if (objXhr.readyState === 4) {
        if (objXhr.status === 200) {
          const response = JSON.parse(objXhr.response);
          console.log(response);
          if (response.status === 1) {
            if (this.categoryId === -1) {
              scope.toastr.success('Added successfully', 'Add!')
            }
            else {
              scope.toastr.success('Updated successfully', 'Update!')
            }
            setTimeout(() => {
              scope.router.navigate(["/admin/categories"]);
            }, 2000);

          } else {
            scope.toastr.warning('Submission failed', 'ohh!')
          }
        } else {
          scope.handleError(objXhr);
        }
      }
    };
    objXhr.send(formdata);
  }

  handleError(objXhr: XMLHttpRequest) {
    this.toastr.error('error', 'ohh!')
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }



  back() {
    this.router.navigate(["admin/categories"])
  }

  reset(userForm) {
    if (!this.categoryId) {
      userForm.reset();
    }
    else {
      this.getcategoryid();
    }

    this.submitted = false;
  }


}
