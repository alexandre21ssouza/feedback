import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.scss']
})
export class CursoAddComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ocultar = true;


  novoCursoForm = this.fb.group({
    nomeDoCurso: ['', [Validators.required]],
    areaDoCurso: ['', [Validators.required]],
    nivel: ['', [Validators.required]],
    descricaoDoCurso: ['', [Validators.required]],
    cargaHoraria: ['', [Validators.required]],
    valorDoCurso: ['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
  senha:['', [Validators.required, Validators.minLength(8)]]
  })


  onSubmit() {
    alert("Curso criado com sucesso!")
  }

  onImagem() {
    alert("Imagem adicionada com sucesso!")
  }

  ngOnInit(): void {
  }

}
