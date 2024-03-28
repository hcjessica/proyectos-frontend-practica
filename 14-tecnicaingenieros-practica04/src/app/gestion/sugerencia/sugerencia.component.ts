import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sugerencia } from './sugerencia';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent],
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.css'
})
export class SugerenciaComponent {
  modeloSugerencia = new Sugerencia();

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaSugerencias = false;
  hiddenCampoTitulo = true;
  hiddenCampoDescripcion = true;

  sugerencias: Sugerencia[] = [
    {id: 1, titulo: "Añadir información en los requerimientos", descripcion: "Contemplar los datos sobre los stocks en almacén en el formato"},
    {id: 2, titulo: "Lanzar comunicados en la intranet", descripcion: "Sería buena opción ver los comunicados importante al ingresar a la intranet"},
  ];

  crearSugerencia(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaSugerencias = true;
    this.modeloSugerencia.id = this.sugerencias.length + 1;
  }

  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaSugerencias = false;
    this.limpiarFormSugerencia();
  }

  guardarSugerencia(){
    if(this.validarDatosSugerencia()){
      this.sugerencias.push({id: this.modeloSugerencia.id, titulo: this.modeloSugerencia.titulo, descripcion: this.modeloSugerencia.descripcion});

      this.limpiarFormSugerencia();
      
      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaSugerencias = false;

      Swal.fire({
        icon: "info",
        title: "Información",
        text: "Se ha registrado la sugerencia exitosamente"
      });
      //console.log(this.sugerencias);
    }
  }

  validarDatosSugerencia(){
    let rpsta = true;
    this.hiddenCampoTitulo = true;
    this.hiddenCampoDescripcion = true;

    if(!this.modeloSugerencia.titulo){
      this.hiddenCampoTitulo = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el título de la sugerencia"
      });
      rpsta = false;
    }else if(!this.modeloSugerencia.descripcion){
      this.hiddenCampoDescripcion = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Describa su sugerencia"
      });
      rpsta = false;
    }
    return rpsta;
  }

  limpiarFormSugerencia(){
    this.modeloSugerencia.id = this.sugerencias.length + 1;
    this.modeloSugerencia.titulo = "";
    this.modeloSugerencia.descripcion = "";
  }
}
