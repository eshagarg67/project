
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';


@Injectable()
export class SharedService {
  categories$ = new BehaviorSubject<any[]>(null);
  updatecount$ = new BehaviorSubject<any[]>(null)



  setCategories(categories) {
    this.categories$.next(categories);
  }

  setupdatecount() {
    const items = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [];
    if (!isNullOrUndefined(items) && items.length > 0) {
      const total = items.reduce(function (prev, cur) {
      
        if (!cur.isWishlist) {
          return prev + cur.quantity;
        } else {
          return prev;
        }

      }, 0);

      this.updatecount$.next(total);
    }
  }
}