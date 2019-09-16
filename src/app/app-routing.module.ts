import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { HeaderComponent} from './Admin/shared/header/header.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { FooterComponent} from './Admin/shared/footer/footer.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
 },
{
  path:'footer',
  component:FooterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
