
import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    productuser() :Observable<any>{
    

         return this.apiService.sendRequest("/api/product/listing",'GET', null, null);
     }
     adduser(data) :Observable<any>{
        const query: any[]=[];

        query.push({key: 'username', value: data.email});
        query.push({key: 'password', value: data.password});

         return this.apiService.sendRequest("/api/user/login",'GET', null, query);
     }
 
 
}



