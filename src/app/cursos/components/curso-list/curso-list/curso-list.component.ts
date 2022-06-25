import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/cursos';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  array: Curso[] = [];

  constructor(private servico: CursosService
    ) { }

  valorDesconto(listaDeCursos: Curso) {
    return listaDeCursos.valor - (listaDeCursos.valor * listaDeCursos.desconto)
  }

  onComprar(listaDeCursos: Curso) {
    alert("Produto adicionado no carrinho!");
  }
  ngOnInit(): void {
    this.array = this.servico.getCursos();

    
  }

}
