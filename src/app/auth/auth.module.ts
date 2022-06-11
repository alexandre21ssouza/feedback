import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro/cadastro.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
