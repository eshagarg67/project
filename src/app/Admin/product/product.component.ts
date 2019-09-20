import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  count:any;
  list:any;

  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.getproduct();
  }
  getproduct() {
    this.productservice.productuser().subscribe(data => {
      console.log(data);
      this.count = data;
      this.list = this.count.body;

    })
  }
}
