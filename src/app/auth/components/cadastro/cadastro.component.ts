import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  nome:string = '';
  email:string = '';
  senha:string = '';
  
  ocultar = true;
  constructor() { }


  onSubmit(){
   
  }
  ngOnInit(): void {
  }

}
