import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'
import { ProductService } from '../product.service';
import { isNullOrUndefined } from 'util';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './product_form.component.html',
  styleUrls: ['./product_form.component.css']
})
export class FormComponent implements OnInit {
  productformmodel: any = {
    productName: '', productDescription: '', createdBy: -1, productImage: '',
    modelNo: '', categoryId: -1, price: 0, isDiscounted: false, quantityInStock: 0, discountPercent: 0
  };
  submitted: any = false;
  userForm: NgForm;
  file: any;
  count: any;
  Id: any;
  list: any;
  edit: any;
  productId: any;
 image ='';
 //image:any;

  constructor(private route: ActivatedRoute, private toastr: ToastrService, private router: Router, private productservice: ProductService) {


  }
  getproductid() {
    this.route.params.subscribe(param => {
      this.productId = parseInt(param['id']);
      if (this.productId) {
        this.productservice.getedit(this.productId).subscribe(data => {
          console.log(data);
          this.productformmodel = data.body;
          if(this.productformmodel.productImage!=null){
          this.image = "data:image/png;base64," + this.productformmodel.productImage;
          }
        })
      }
    },
      error => {


      });

  }




  ngOnInit() {
    this.getcategoryuser();
    this.getproductid();
  }


  onSubmit(data) {

    if (data.valid && this.file!==undefined) {
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
    if (!this.productId) {
      formValue.createdBy = uid;
    }
    else {
      formValue.createdBy = this.productformmodel.createdBy;
      formValue.productId = this.productId;
      formValue.modifiedBy = uid;
    }
    const formdata = new FormData();
    const scope = this;
    formdata.append('product', JSON.stringify(formValue));

    if (this.file) {
      formdata.append('file', this.file);
    }
    const objXhr = new XMLHttpRequest();
    if (!this.productId) {
      objXhr.open('POST', "/api/product/insert");
      this.toastr.success('Added successfully', 'Add!')
    }
    else {
      objXhr.open('PUT', "/api/product/update");
      this.toastr.success('Updated successfully', 'Update!')
    }

    objXhr.onreadystatechange = function (aEvt) {
      if (objXhr.readyState === 4) {
        if (objXhr.status === 200) {
          const response = JSON.parse(objXhr.response);
          console.log(response);
          if (response.status === 1) {
            setTimeout(() => {
              scope.router.navigate(["/admin/products"]);
            }, 2000);
           
          } else {
            scope.toastr.warning('submitted failed', 'ohh!')
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

  getcategoryuser() {
    this.productservice.categoryuser().subscribe(data => {
      console.log(data);
      this.list = data.body;
    });
  }



  back() {
    this.router.navigate(["admin/products"])
  }

  reset(userForm) {
    if(!this.productId){
      userForm.reset();
    }
    else{
      this.getproductid();
    }
    this.submitted = false;
  }

}
