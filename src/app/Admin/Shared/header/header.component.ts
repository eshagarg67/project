import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 

export class HeaderComponent implements OnInit {

   res:any;
   val:any;
   user:any;
  constructor(private http: HttpClient,private router:Router) {
   
   }

  ngOnInit() {
    
       this.res= localStorage.getItem('userInfo');
       this.val= JSON.parse(this.res);
       this.user= "data:image/png;base64," + this.val.userImage;
  }
  
  log(){
    localStorage.removeItem('userInfo');
    this.router.navigate([""]);
  }
  
}
