import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './Admin/shared/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from './shared/services/api.service';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CategoryComponent } from './Admin/category/category_list.component';
import { ProductComponent } from './Admin/product/product_list.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthService } from './shared/services/auth.service';
import { FeaturesComponent } from './features/features.component';
import { AdminComponent } from './Admin/admin.component';
import { DashboardService } from './Admin/dashboard/dashboard.service';
import { ProductService } from './Admin/product/product.service';
import { CategoryService } from './Admin/category/category.service';
import { FormComponent } from './Admin/product/form/product_form.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryFormComponent } from './Admin/category/category-form/category-form.component';


// User view
import { HomeService } from './shared/services/home.service';
import { CatService } from './shared/services/cat.service';
import { ProService } from './shared/services/pro.service';
import { AppHeaderComponent } from './features/components/appheader/appheader.component';
import { AppFooterComponent } from './features/components/appfooter/appfooter.component';
import { BannerComponent } from './features/shared/banner/banner.component';
import { FeatureBoxComponent } from './features/shared/feature-box/feature-box.component';
import { FeaturedCategoriesComponent } from './features/components/featured-categories/featured-categories.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { ArrivalProductComponent } from './features/shared/arrival-product/arrival-product.component';
import { FeaturedProductsComponent } from './features/components/featured-products/featured-products.component';
import { ShippingComponent } from './features/shared/shipping/shipping.component';
import { ProductlistbycategoryComponent } from './features/productlistbycategory/productlistbycategory.component';
import { ProductDetailComponent } from './features/components/product-detail/product-detail.component';
import { AboutComponent } from './features/components/appfooter/about/about.component';
import { FaqComponent } from './features/components/appfooter/faq/faq.component';
import { PolicyComponent } from './features/components/appfooter/policy/policy.component';
import { SharedService } from './shared/services/shared.service';
import {MatProgressSpinnerModule} from '@angular/material'
import { AddToCartComponent } from './features/shared/addtoCart/addtocart.component';
import { SignUpformComponent } from './SignUp/signupform.component';
import { CartComponent } from './features/components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    FeaturesComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    FormComponent,
    CategoryFormComponent,
    BannerComponent,
    FeatureBoxComponent,
    FeaturedCategoriesComponent,
    LandingPageComponent,
    ArrivalProductComponent,
    FeaturedProductsComponent,
    ShippingComponent,
    ProductlistbycategoryComponent,
    ProductDetailComponent,
    AboutComponent,
    FaqComponent,
    PolicyComponent,
    AddToCartComponent,
    SignUpformComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',

    }),
  ],
  providers: [LoginService, SharedService , DashboardService, ApiService, AuthGuardService
    , AuthService, CategoryService, ProductService, HomeService, CatService,ProService],
  bootstrap: [AppComponent]
})
export class AppModule { }
