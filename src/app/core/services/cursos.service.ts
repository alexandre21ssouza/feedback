import { Injectable } from '@angular/core';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursosOnline: Curso[] = [
    {
      nomeDoCurso: "Curso Angular completo",
      areaDoCurso: "Tecnologia",
      nivel: "Avançado",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "120 horas",
      valor: 99.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/angular.png",
    },
    {
      nomeDoCurso: "Curso Css completo",
      areaDoCurso: "Tecnologia",
      nivel: "Básico",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "100 horas",
      valor: 59.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/css-curso.png",
    },
    {
      nomeDoCurso: "Curso Html completo",
      areaDoCurso: "Tecnologia",
      nivel: "Intermediário",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "120 horas",
      valor: 49.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/html.png",
    },
    {
      nomeDoCurso: "Curso Excel completo",
      areaDoCurso: "Tecnologia",
      nivel: "Básico ao avançado",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "100 horas",
      valor: 89.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/logo-excel.png",
    },
    {
      nomeDoCurso: "Curso Espanhol completo",
      areaDoCurso: "Idiomas",
      nivel: "Básico ao avançado",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "120 horas",
      valor: 89.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/curso-espanhol.png",
    },
    {
      nomeDoCurso: "Curso Inglês completo",
      areaDoCurso: "Idiomas",
      nivel: "Básico",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "90 horas",
      valor: 59.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/curso-ingles.png",
    },
    {
      nomeDoCurso: "Curso Inglês completo",
      areaDoCurso: "Idiomas",
      nivel: "Intemediário",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "90 horas",
      valor: 59.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/curso-ingles.png",
    },
    {
      nomeDoCurso: "Curso Inglês completo",
      areaDoCurso: "Idiomas",
      nivel: "Avançado",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "90 horas",
      valor: 59.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/curso-ingles.png",
    },
    {
      nomeDoCurso: "Curso escrita fiscal completo",
      areaDoCurso: "Contábil",
      nivel: "Básico",
      descricao: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint sunt facere quam fuga laborum debitis quibusdam rerum beatae? Aut fugiat odit maxime officiis. Illum voluptates facere delectus corrupti possimus maxime.",
      cargaHoraria: "90 horas",
      valor: 39.99,
      desconto: 0.2,
      emPromocao: true,
      imagem: "assets/curso-fiscal.png",
    },


  ];

  getCursos(): Curso[] {
    return this.cursosOnline;
  }


  constructor() { }

}
