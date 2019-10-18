import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css']
})
export class FeatureBoxComponent implements OnInit {


  @Input() item = null;
  categoryImg: any;
  category:any;

  constructor(private router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  
  }
  Go(id) {
    this.router.navigate(['category',id])
  }

  




  

}
