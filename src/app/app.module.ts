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
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Admin/admin.component';
import { DashboardService } from './Admin/dashboard/dashboard.service';
import { ProductService } from './Admin/product/product.service';
import { CategoryService } from './Admin/category/category.service';
import { FormComponent } from './Admin/product/form/product_form.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryFormComponent } from './Admin/category/category-form/category-form.component';


// User view
import { HomeService } from './shared/services/home.service';
import { AppHeaderComponent } from './home/components/appheader/appheader.component';
import { AppFooterComponent } from './home/components/appfooter/appfooter.component';
import { BannerComponent } from './home/shared/banner/banner.component';
import { FeatureComponent } from './home/shared/feature/feature.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    FormComponent,
    CategoryFormComponent,
    BannerComponent,
    FeatureComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',

    }),
  ],
  providers: [LoginService, DashboardService, ApiService, AuthGuardService
    , AuthService, CategoryService, ProductService ,HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
