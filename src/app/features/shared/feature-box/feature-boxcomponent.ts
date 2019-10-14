import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css']
})
export class FeatureBoxComponent implements OnInit {


  @Input() item = null;
  categoryImg: any;

  constructor() { }

  ngOnInit() {
  //  this.getcategory();
  }



  

}
