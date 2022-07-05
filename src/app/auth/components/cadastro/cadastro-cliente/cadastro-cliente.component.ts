import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {
  nome:string = '';
  email:string = '';
  senha:string = '';
  
  ocultar = true;

  constructor() { }

  onSubmit(){
    alert("Cadastro efetuado com sucesso!")
  }

  ngOnInit(): void {
  }

}
