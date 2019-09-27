import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category_list.component.html',
  styleUrls: ['./category_list.component.css']
})
export class CategoryComponent implements OnInit {
  count:any;
  list:any;
  constructor(private toastr: ToastrService,private router:Router,private categoryservice:CategoryService) { }

  ngOnInit() {
    this.getcategory();
  
  }
  
  getcategory() {
    this.categoryservice.categoryuser().subscribe(data => {
      console.log(data);
      this.count = data;
      this.list = this.count.body;
      if(data.statusCode===200){
        
      
    }
  },
  error=>{
    this.toastr.error('Get failed', 'Get Data!')
 
  });
  }

  add(){
    this.router.navigate(["admin/categoryform"]);
  }
  getdelete(id: number) {
      this.categoryservice.delete(id).subscribe(data => {
        console.log(data);
        if(data.statusCode===200){
          this.toastr.success('Deleted successfully', 'Delete!')
        
      }
    },
    error=>{
      this.toastr.error('Delete failed', 'Delete!')
   
    });
    
  }
}
