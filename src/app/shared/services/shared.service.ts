
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SharedService {
    categories$ = new BehaviorSubject<any[]>(null);


    setCategories(categories){
      this.categories$.next(categories);
    }
}