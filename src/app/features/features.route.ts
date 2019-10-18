import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductlistbycategoryComponent } from './productlistbycategory/productlistbycategory.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';




const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: '',
                component: LandingPageComponent
            },
            {
                path: 'category/:id',
                component: ProductlistbycategoryComponent,
            },
            {
                path: 'category/product/:id',
                component: ProductDetailComponent,
            },
        ]
    },
   

];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
