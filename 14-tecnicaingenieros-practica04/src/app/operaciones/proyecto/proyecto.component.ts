import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';
import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {
  modeloProyecto = new Proyecto();

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaProyectos = false;
  hiddenCampoCodigo = true;
  hiddenCampoDescripcion = true;
  hiddenCampoTProyecto = true;
  hiddenCampoSProyecto = true;
  hiddenCampoCliente = true;

  arrayTipoProyecto: { [key: number]: string } = {
    1: "GRAN PROYECTO",
    2: "PROYECTO GRANDE",
    3: "PROYECTO MEDIANO",
    4: "PROYECTO CHICO",
  };

  arrayStatusProyecto: { [key: number]: string } = {
    1: "ACTIVO",
    2: "INICIO",
    3: "PARALIZADO",
    4: "FINALIZADO",
  };

  arrayCliente: { [key: number]: string } = {
    1: "SUNATI",
    2: "PETROPERUVIAN",
    3: "CENCOSAD",
    4: "LUBELUXE",
  };

  proyectos: Proyecto[] = [
    {id: 1, codigo: "P24-SUN-C001" , descripcion: "ESTUDIO SUNATI", idTipoProyecto: 3, idStatus: 2, idCliente: 1},
    {id: 2, codigo: "P24-PET-I002" , descripcion: "INSTALACIONES PETROPERUVIAN", idTipoProyecto: 3, idStatus: 1, idCliente: 2},
    {id: 3, codigo: "P24-CEN-M001" , descripcion: "MANTENIMIENTO DE INSTALACIONES DE CENCOSAD", idTipoProyecto: 1, idStatus: 4, idCliente: 3},
    {id: 4, codigo: "P24-LUB-C003" , descripcion: "REVISIÓN E INSTALACIÓN DE SEDES LUBELUXE", idTipoProyecto: 4, idStatus: 3, idCliente: 4},
  ];

  crearProyecto(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaProyectos = true;
    this.modeloProyecto.id = this.proyectos.length + 1;
  }

  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaProyectos = false;
    this.limpiarFormProyecto();
  }

  guardarProyecto(){
    if(this.validarDatosProyecto()){
      this.proyectos.push({id: this.modeloProyecto.id, codigo: this.modeloProyecto.codigo?.toUpperCase(), descripcion: this.modeloProyecto.descripcion?.toUpperCase(), idTipoProyecto: this.modeloProyecto.idTipoProyecto, idStatus: this.modeloProyecto.idStatus, idCliente: this.modeloProyecto.idCliente});

      this.limpiarFormProyecto();
      
      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaProyectos = false;

      Swal.fire({
        icon: "info",
        title: "Información",
        text: "Se ha registrado el proyecto exitosamente"
      });
      //console.log(this.proyectos);
    }
  }

  validarDatosProyecto(){
    let rpsta = true;
    this.hiddenCampoCodigo = true;
    this.hiddenCampoDescripcion = true;
    this.hiddenCampoTProyecto = true;
    this.hiddenCampoSProyecto = true;
    this.hiddenCampoCliente = true;

    if(!this.modeloProyecto.codigo){
      this.hiddenCampoCodigo = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el código del proyecto"
      });
      rpsta = false;
    }else if(!this.modeloProyecto.descripcion){
      this.hiddenCampoDescripcion = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde la descripción del proyecto"
      });
      rpsta = false;
    }else if(!this.modeloProyecto.idTipoProyecto){
      this.hiddenCampoTProyecto = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione el tipo del proyecto"
      });
      rpsta = false;
    }else if(!this.modeloProyecto.idStatus){
      this.hiddenCampoSProyecto = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione el status del proyecto"
      });
      rpsta = false;
    }else if(!this.modeloProyecto.idCliente){
      this.hiddenCampoCliente = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione el cliente del proyecto"
      });
      rpsta = false;
    }
    return rpsta;
  }

  limpiarFormProyecto(){
    this.modeloProyecto.id = this.proyectos.length + 1;
    this.modeloProyecto.codigo = "";
    this.modeloProyecto.descripcion = "";
    this.modeloProyecto.idTipoProyecto = undefined;
    this.modeloProyecto.idStatus = undefined;
    this.modeloProyecto.idCliente = undefined;
  }
}
