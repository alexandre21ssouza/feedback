import { Injectable } from '@angular/core';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursosOnline: Curso[] = [
    {
      imagem: "",
      nomeDoCurso: "",
      area: "",
      descrição: "",
      categoria: "",
      cargaHoraria: "",
      preço: 1

    },]

  constructor() { }
}
