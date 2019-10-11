import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  count:any;
  category:any;

  constructor(private toastr: ToastrService, private catservice:CatService) { }

  ngOnInit() {
    this.getcategory();
  }
  getcategory() {
    this.catservice.categoryuser().subscribe(data => {
      console.log(data);
      debugger;
      this.count = data.body;
      debugger;
      this.category = "data:image/png;base64," + this.count.categoryImage;
      debugger;
      if(data.statusCode===200){
      
    }
  },
  error=>{
    this.toastr.error('Get failed', 'Get Data!')
 
  });
    
  }

}
