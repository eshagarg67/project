import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { LandingPageComponent } from './landing-page/landing-page.component';




const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        children: [
          {
              path:'',
              component: LandingPageComponent
          }
        ]
    }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
