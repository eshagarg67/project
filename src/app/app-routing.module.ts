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
        path: 'addform',
        component: FormComponent,
      },
      {
        path: 'editform/:id',
        component: FormComponent,
      },
      {
        path: 'categoryform',
        component: CategoryFormComponent,
      },
      {
        path: 'categories',
        component: CategoryComponent
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
    path: '',
    component: HomeComponent
  },
 
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
