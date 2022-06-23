import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListComponent } from './components/curso-list/curso-list/curso-list.component';
import { CursoAddComponent } from './components/curso-add/curso-add/curso-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';




@NgModule({
  declarations: [
    CursoListComponent,
    CursoAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,

  ]
})
export class CursosModule { }
