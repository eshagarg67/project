import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
 

export class HeaderComponent implements OnInit {

   res:any;
   val:any;
  constructor(private http: HttpClient) {
   
   }

  ngOnInit() {
       this.res= localStorage.getItem('userInfo');
      this.val= JSON.parse(this.res);
      
  
  }
  
}
