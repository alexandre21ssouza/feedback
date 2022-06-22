import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoAddComponent } from './cursos/components/curso-add/curso-add/curso-add.component';

const routes: Routes = [
  { path: 'cursoadd', component: CursoAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
