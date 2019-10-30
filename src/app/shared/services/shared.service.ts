
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SharedService {
    categories$ = new BehaviorSubject<any[]>(null);
    updatecount$ = new BehaviorSubject<any[]>(null)



    setCategories(categories){
      this.categories$.next(categories);
    }

    setupdatecount(updatecount){
      this.updatecount$.next(updatecount)
    }
}