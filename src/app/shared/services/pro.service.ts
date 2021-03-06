
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable()
export class ProService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    productuser() :Observable<any>{
    

         return this.apiService.sendRequest("/api/product/listing",'GET', null, null);
     }
    
     productbyid(id:number): Observable<any> {

        const query: any[] = [];        
        query.push({ key: 'id', value: id });
        return this.apiService.sendRequest("/api/product/detail/"+id,"GET");
    }


 
}



