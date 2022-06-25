import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoAddComponent } from './cursos/components/curso-add/curso-add/curso-add.component';
import { CursoListComponent } from './cursos/components/curso-list/curso-list/curso-list.component';

const routes: Routes = [
  { path: 'cursoadd', component: CursoAddComponent },
  { path: 'cursolist', component: CursoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
