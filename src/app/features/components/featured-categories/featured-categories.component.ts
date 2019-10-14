import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../shared/services/cat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-featured-categories',
    templateUrl: './featured-categories.component.html'
})
export class FeaturedCategoriesComponent implements OnInit {

    categories = [];
    categoryImg:any;
    constructor(private toastr: ToastrService, private catservice: CatService) {

    }

    ngOnInit() {
        this.getcategory();
    }

    getcategory() {
        this.catservice.categoryuser().subscribe(data => {
            if (data.statusCode === 200) {
                if (data.body !== null || data.body !== undefined) {
                    console.log(data);
                    this.categories = data.body;
                //  this.categoryImg = "data:image/png;base64," + this.categories.categoryImage;
                }
            } else {
                this.categories=[];
                this.toastr.warning('Data not found')
            }
        },
            error => {
                this.toastr.error('Get failed', 'Get Data!')

            });

    }
}

