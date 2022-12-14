import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './services/AuthService';
import { ServiceService } from './services/ServicioApi/service.service';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EditarComponent,
    AgregarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,

    FormsModule
  ],
  providers: [
    AuthService,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
