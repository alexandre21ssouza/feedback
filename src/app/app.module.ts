import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './cursos/cursos.module';




@NgModule({
  declarations: [
    AppComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AuthModule,
    CursosModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
