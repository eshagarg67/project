
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable()
export class CatService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    categoryuser() :Observable<any>{
    

         return this.apiService.sendRequest("/api/category/listing",'GET', null, null);
     }
    

     productbycategory(id:Number) :Observable<any>{
    
        const query: any[] = [];        
        query.push({ key: 'id', value: id });
        return this.apiService.sendRequest("/api/product/productlistbycategory/"+id,"GET");
    }
   
 
}



