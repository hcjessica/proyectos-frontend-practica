import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { Curso } from './curso';
import { CabeceraComponent } from '../../utiles/cabecera/cabecera.component';
import { PieComponent } from '../../utiles/pie/pie.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, PieComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaCursos = false;
  hiddenCampoNombre = true;
  hiddenCampoHoras = true;
  hiddenCampoCreditos = true;
  hiddenCampoCategoria = true;
  modeloCurso = new Curso();

  arrayCategoria: { [key: number]: string } = {
    1: "software",
    2: "gestión",
    3: "otros"
  };

  cursos: Curso[] = [
    {id: 1, nombre: "Java", horas: 24, creditos: 4, categoria: 1},
    {id: 2, nombre: "C#", horas: 20, creditos: 4, categoria: 1},
    {id: 3, nombre: "Python", horas: 24, creditos: 5, categoria: 1},
    {id: 4, nombre: "Buenas practicas en programación", horas: 24, creditos: 5, categoria: 2},
    {id: 5, nombre: "Inglés Básico", horas: 24, creditos: 5, categoria: 3}
  ];

  crearCurso(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaCursos = true;
    this.modeloCurso.id = this.cursos.length + 1;
  }
  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaCursos = false;
    this.limpiarFormCurso();
  }
  guardarCurso(){
    if(this.validarDatosCurso()){
      this.cursos.push({id: this.modeloCurso.id, nombre: this.modeloCurso.nombre, horas: this.modeloCurso.horas, creditos: this.modeloCurso.creditos, categoria: this.modeloCurso.categoria});

      this.limpiarFormCurso();
      
      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaCursos = false;

      alert("Se ha registrado el curso exitosamente");
      
      //console.log(this.cursos);
    }
  }
  validarDatosCurso(){
    let rpsta = true;
    this.hiddenCampoNombre = true;
    this.hiddenCampoHoras = true;
    this.hiddenCampoCreditos = true;
    this.hiddenCampoCategoria = true;

    if(!this.modeloCurso.nombre){
      this.hiddenCampoNombre = false;
      alert("Brinde el nombre del curso");
      rpsta = false;
    }else if(!this.modeloCurso.horas){
      this.hiddenCampoHoras = false;
      alert("Brinde el nro. de horas del curso");
      rpsta = false;
    }else if(this.modeloCurso.creditos == null){
      this.hiddenCampoCreditos = false;
      alert("Brinde el nro. de créditos del curso");
      rpsta = false;
    }else if(this.modeloCurso.horas < 1 || this.modeloCurso.horas > 24){
      this.hiddenCampoHoras = false;
      alert("El número de horas debe estar dentro del rango: 1 - 24");
      rpsta = false;
    }else if(this.modeloCurso.creditos < 0 || this.modeloCurso.creditos > 5){
      this.hiddenCampoCreditos = false;
      alert("El número de créditos debe estar dentro del rango: 0 - 5");
      rpsta = false;
    }else if(!this.modeloCurso.categoria){
      this.hiddenCampoCategoria = false;
      alert("Seleccione la categoría del curso");
      rpsta = false;
    }
    return rpsta;
  }
  limpiarFormCurso(){
    this.modeloCurso.id = this.cursos.length + 1;
    this.modeloCurso.nombre = "";
    this.modeloCurso.horas = undefined;
    this.modeloCurso.creditos = undefined;
    this.modeloCurso.categoria = undefined;
  }
}
