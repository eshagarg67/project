import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginmodel: any = {
    uemail: '', upassword: '',
  };
  submitted: any = false;
  userForm: NgForm;
  api: any;
  visible = false;


  constructor(private loginservice: LoginService, private router: Router) { }


  ngOnInit() {

  }


  onSubmit(data) {
    if (data.valid) {
      this.visible = true;
      this.loginservice.loginuser(data.value).pipe(delay(5000)).subscribe(res => {
        if (res.status === 1) {
          localStorage.setItem('userInfo', JSON.stringify(res.body));
          if(res.body.isAdmin===true){
          this.router.navigate(["/admin/dashboard"]);
          } else{
            this.router.navigate(['']);
          }
        }
        else{
           alert(res.message);
          // read localstorage
          // const res=  localStorage.getItem('userInfo');
     //  const val= JSON.parse(res);
                
          // to remove
          //  localStorage.removeItem('userInfo');
        }
        this.visible = false;
      }, error => {
       console.log("backend error!");
        alert("backend error!");
        this.visible = false;
      });
    }
    this.submitted = true;
  }

  navigate(){
    this.router.navigate(['/signin'])
  
  }



}

