import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Proveedor } from './proveedor';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent {
  modeloProveedor = new Proveedor();

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaProveedores = false;
  hiddenCampoNombre = true;
  hiddenCampoTelefono = true;
  hiddenCampoCorreo = true;
  hiddenCampoSitioWeb = true;

  proveedores: Proveedor[] = [
    {id: 1, nombre: "Sunati", direccion: "Av. Prolongación 233", telefono: "3658800", correo: "logistica@sunati.com", sitioweb: "https://www.sunati.com"},
    {id: 2, nombre: "PetroPeruvian", direccion: "Av. Arequipa 100", telefono: "2537114", correo: "logistica@petroperuvian.com", sitioweb: "https://www.petroperuvian.com"},
  ];

  crearProveedor(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaProveedores = true;
    this.modeloProveedor.id = this.proveedores.length + 1;
  }

  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaProveedores = false;
    this.limpiarFormProveedor();
  }

  guardarProveedor(){
    if(this.validarDatosProveedor()){
      this.proveedores.push({id: this.modeloProveedor.id, nombre: this.modeloProveedor.nombre, direccion: this.modeloProveedor.direccion, telefono: this.modeloProveedor.telefono, correo: this.modeloProveedor.correo, sitioweb: this.modeloProveedor.sitioweb});

      this.limpiarFormProveedor();
      
      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaProveedores = false;

      Swal.fire({
        icon: "info",
        title: "Información",
        text: "Se ha registrado el proveedor exitosamente"
      });
      //console.log(this.proveedores);
    }
  }

  validarDatosProveedor(){
    let rpsta = true;
    this.hiddenCampoNombre = true;
    this.hiddenCampoTelefono = true;
    this.hiddenCampoCorreo = true;
    this.hiddenCampoSitioWeb = true;

    if(!this.modeloProveedor.nombre){
      this.hiddenCampoNombre = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el nombre del proveedor"
      });
      rpsta = false;
    }else if(!this.modeloProveedor.telefono){
      this.hiddenCampoTelefono = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el teléfono del proveedor"
      });
      rpsta = false;
    }else if(this.modeloProveedor.correo && !(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(this.modeloProveedor.correo)){
      this.hiddenCampoCorreo = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Correo electrónico inválido, debe ingresar un correo"
      });
      rpsta = false;
    }else if(!(/^[0-9]{9}$/).test(this.modeloProveedor.telefono)){
      this.hiddenCampoTelefono = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Teléfono inválido, debe ingresar 9 dígitos numéricos"
      });
      rpsta = false;
    }else if(this.modeloProveedor.sitioweb && !(/^(http[s]?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}([\/\w-]*)*\/?$/).test(this.modeloProveedor.sitioweb)){
      this.hiddenCampoSitioWeb = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Sitio web inválido, debe ingresar la url del sitio web"
      });
      rpsta = false;
    }
    return rpsta;
  }

  limpiarFormProveedor(){
    this.modeloProveedor.id = this.proveedores.length + 1;
    this.modeloProveedor.nombre = "";
    this.modeloProveedor.direccion = "";
    this.modeloProveedor.telefono = undefined;
    this.modeloProveedor.correo = "";
    this.modeloProveedor.sitioweb = "";
  }
}
