import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader/loader.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
