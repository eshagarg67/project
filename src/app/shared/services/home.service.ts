
import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable()
export class HomeService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    categoryuser() :Observable<any>{
    

         return this.apiService.sendRequest("/api/category/listing",'GET', null, null);
     }
    


 
}



