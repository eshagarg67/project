import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, AfterViewInit, OnDestroy {


    ngOnInit(){
        
    }
    ngAfterViewInit(){
        document.querySelector('body').classList.add('home');
    }

    ngOnDestroy() {
        document.querySelector('body').classList.remove('home');
      
    }
  
}