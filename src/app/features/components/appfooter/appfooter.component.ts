import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatService } from '../../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-footer',
  templateUrl: './appfooter.component.html',
  styleUrls: ['./appfooter.component.scss']
})
export class AppFooterComponent implements OnInit {
category:any;
categorylist:any;
categoryId:any;


  constructor( private route: ActivatedRoute,private toastr: ToastrService, private router: Router, private catservice: CatService) { 
    this.route.params.subscribe(param => {
      this.categoryId= parseInt(param['id']);
      this.getdetailbyid();
    });
  }

  ngOnInit() {
    this.getcategory();
    //this.getdetailbyid();
  }

  getcategory() {
    this.catservice.categoryuser().subscribe(data => {
      debugger;
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

  getdetailbyid() {
    
    this.catservice.detailbyid(this.categoryId).subscribe(data=>{
        this.categorylist=data.body;
    },
    error=>{
 
    
    });
  


}

  Go(id) {
    this.router.navigate(['category',id])
}


}
