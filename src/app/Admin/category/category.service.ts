
import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable()
export class CategoryService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    categoryuser() :Observable<any>{
    

         return this.apiService.sendRequest("/api/category/listing",'GET', null, null);
     }
     
     delete(id: number): Observable<any> {
        const query: any[] = [];        
        query.push({ key: 'id', value: id });
        return this.apiService.sendRequest("/api/product/delete", 'DELETE', null, query);
    }
 
 
}



