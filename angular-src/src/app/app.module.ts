import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthenticationService } from './services/authentication.service';
import { QuotationService } from './services/quotation.service';
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
    { path:'', component: HomeComponent },
    { path:'register', component: RegisterComponent },
    { path:'login', component: LoginComponent },
    { path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path:'create', component: CreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    CreateComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      ValidateService,
      AuthenticationService,
      AuthGuard,
      QuotationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
