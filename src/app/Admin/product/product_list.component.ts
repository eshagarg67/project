import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product_list.component.html',
  styleUrls: ['./product_list.component.css']
})
export class ProductComponent implements OnInit {
  count: any;
  list: any;
  detail: any;

  constructor(private toastr: ToastrService,private router: Router, private productservice: ProductService) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct() {
    this.productservice.productuser().subscribe(data => {
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

  getdelete(id: number) {

      this.productservice.delete(id).subscribe(data => {
        console.log(data);
        if(data.statusCode===200){
            this.toastr.success('Deleted successfully','Delete!')
            this.getproduct();
        }
      
      },
      error=>{
        this.toastr.error('Delete failed','Delete!')
     
      });
}




  add() {
   this.router.navigate(["admin/produts/addform"])
  }

  Edit(id) {
    this.router.navigate(['admin/products/editform',id])
  }
}
