import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arrival-product',
  templateUrl: './arrival-product.component.html',
  styleUrls: ['./arrival-product.component.css']
})
export class ArrivalProductComponent implements OnInit {
  
  @Input() items = null;
  categoryImg: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Go(id) {
    this.router.navigate(['product',id])
    
  }


}
