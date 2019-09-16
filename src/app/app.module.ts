import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Admin/login/login.component';
import { HeaderComponent } from './Admin/shared/header/header.component';
import { FooterComponent } from './Admin/shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from './Admin/Shared/services/api.service';
import {LoginService} from './Admin/login/login.service';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [LoginService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
