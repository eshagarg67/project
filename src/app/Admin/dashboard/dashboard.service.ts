
import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';


@Injectable()
export class DashboardService {

    domain = '';
    constructor(private apiService: ApiService) {
      
    }

    dashboarduser() :Observable<any>{
    

         return this.apiService.sendRequest("api/dashboard/statistics",'GET', null, null);
     }
 
}



