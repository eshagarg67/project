import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CategoryComponent } from './Admin/category/category_list.component';
import { ProductComponent } from './Admin/product/product_list.component';
import {
  AuthGuardService as AuthGuard
} from './shared/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Admin/admin.component';
import {FormComponent} from './Admin/product/form/product_form.component';
import { CategoryFormComponent } from './Admin/category/category-form/category-form.component';
import { HomeRoutingModule } from './home/home.route';




const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent, // dashboardcontent
      },
      {
        path: 'produts/addform',
        component: FormComponent,
      },
      {
        path: 'products/editform/:id',
        component: FormComponent,
      },
      {
        path: 'categories/addform',
        component: CategoryFormComponent,
      },
      {
        path: 'categories',
        component: CategoryComponent
      },
      {
        path: 'categories/editform/:id',
       component: CategoryFormComponent,
      },
      {
        path: 'products',
        component: ProductComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes), HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
