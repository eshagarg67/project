import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrival-product',
  templateUrl: './arrival-product.component.html',
  styleUrls: ['./arrival-product.component.css']
})
export class ArrivalProductComponent implements OnInit {
  
  @Input() new = null;
  categoryImg: any;

  constructor() { }

  ngOnInit() {
  }

}
