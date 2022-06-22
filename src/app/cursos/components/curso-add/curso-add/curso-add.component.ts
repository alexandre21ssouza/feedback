import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.scss']
})
export class CursoAddComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  novoCurso = this.fb.group({
    nome: ['', [Validators.required]],
    


  }) 

  get nome(){
    return this.novoCurso.get("nome");
  }

  onSubmit(){
    alert("Curso criado com sucesso!")
  }

  ngOnInit(): void {
  }

}
