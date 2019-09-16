
import { Injectable } from '@angular/core';
import { ApiService } from '../Shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    loginuser(data) :Observable<any>{
        const query: any[]=[];

        query.push({key: 'username', value: data.email});
        query.push({key: 'password', value: data.password});

         return this.apiService.sendRequest("/api/user/login",'GET', null, query);
     }
 
}



