import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './cursos/cursos.module';
import { MaterialModule } from './shared/material.module';
import { HomeComponent } from './shared/home/home.component';
import { SharedModule } from './shared/shared.module';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AuthModule,
    CursosModule,
    MaterialModule,
    SharedModule
    
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
