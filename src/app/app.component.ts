import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit,OnDestroy {
  title = 'shoppingApp';

  constructor (private router: Router){}

  ngAfterViewInit() {
    if(this.router.url === ''){
      document.querySelector('body').classList.add('home');
    }
    
  }
  
  ngOnDestroy() {
      document.querySelector('body').classList.remove('home');
    
  }
  
  
}
