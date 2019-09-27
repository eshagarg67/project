
import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {

    domain = '';
    constructor(private apiService: ApiService) {

    }

    productuser(): Observable<any> {


        return this.apiService.sendRequest("/api/product/listing", 'GET', null, null);
    }
    //adddata(detail:any) :Observable<any>{

    // return this.apiService.sendRequest("/api/product/insert",'POST', null, null);
    //}

    delete(id: number): Observable<any> {
        const query: any[] = [];        
        query.push({ key: 'id', value: id });
        return this.apiService.sendRequest("/api/product/delete", 'DELETE', null, query);
    }

    categoryuser(): Observable<any> {


        return this.apiService.sendRequest("/api/category/listing", 'GET', null, null);
    }

    getedit(id:number): Observable<any> {

        const query: any[] = [];        
        query.push({ key: 'id', value: id });
        return this.apiService.sendRequest("/api/product/detail/"+id,"GET");
    }


}



