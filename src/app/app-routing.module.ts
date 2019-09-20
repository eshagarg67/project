import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { CategoryComponent } from './Admin/category/category.component';
import { ProductComponent } from './Admin/product/product.component';
import {
  AuthGuardService as AuthGuard
} from './shared/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Admin/admin.component';
import {FormComponent} from './Admin/form/form.component';


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
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
