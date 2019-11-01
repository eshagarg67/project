import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignUpformComponent implements OnInit {

  model = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    emailId: '',
    userImage: '',
    isAdmin: false
  };

  file: any;
  submitted: any = false;
  constructor(private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  reset(userForm) {
    userForm.reset();
  }

  back() {
    this.router.navigate([''])
  }
  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  onSubmit(data) {
   
    console.log(data);
    this.sendRequest(data.value);
    this.submitted = true;
  }

  sendRequest(formValue) {
    debugger;
    const formdata = new FormData();
    const scope = this;
    formValue.isAdmin=false;
    formdata.append('model', JSON.stringify(formValue));

    if (this.file) {
      formdata.append('file', this.file);
    }
    const objXhr = new XMLHttpRequest();
    objXhr.open('POST', "/api/user/signup");
    objXhr.onreadystatechange = (aEvt) => {
      if (objXhr.readyState === 4) {
        if (objXhr.status === 200) {
          const response = JSON.parse(objXhr.response);
          console.log(response);
          if (response.status === 1) {

            scope.toastr.success('User created successfully', 'Success!')

            setTimeout(() => {
              scope.router.navigate([""]);
            }, 2000);

          } else {
            scope.toastr.warning('Sign Up failed', 'ohh!')
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

}

