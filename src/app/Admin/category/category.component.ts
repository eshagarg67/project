import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  count:any;
  list:any;
  constructor(private router:Router,private categoryservice:CategoryService) { }

  ngOnInit() {
    this.getcategory();
  }
  
  getcategory() {
    this.categoryservice.categoryuser().subscribe(data => {
      console.log(data);
      this.count = data;
      this.list = this.count.body;
    })
  }
  add(){
    this.router.navigate(["/form"]);
  }
}
