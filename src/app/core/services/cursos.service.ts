import { Injectable } from '@angular/core';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursosOnline: Curso[] = [
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/angular.png",

    },
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/css-curso.png",
    },
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/html-curso.png",
    },
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/logo-excel.png",
    },
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/escrita-fiscal.png",
    },
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/curso-espanhol.png",
    }, 
    {
      nomeDoCurso: "string",
    areaDoCurso: "string",
    nivel: "string",
    descricao: "string",
    cargaHoraria: "string",
    valor: 1,
    desconto: 1,
    emPromocao: "string", 
    imagem: "assets/curso-ingles.png",
    },       
  ];

  getCursos():Curso[]{
    return this.cursosOnline;
  }


  constructor() { }

}
