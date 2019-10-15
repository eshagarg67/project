import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CatService } from '../../../shared/services/cat.service';
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

  constructor(private router: Router,private toastr: ToastrService, private catservice: CatService) { }

  ngOnInit() {
    this.getcategory();
  }
  Go(id) {
    this.router.navigate(['category',id])
  }

  getcategory() {
    this.catservice.categoryuser().subscribe(data => {
      
      if(data.statusCode===200){
        this.category = data.body;
    }
    else{
      this.toastr.warning('Data not found')
    }
  },
  error=>{
    this.toastr.error('Get failed', 'Get Data!')
 
  });
    
  }




  

}
