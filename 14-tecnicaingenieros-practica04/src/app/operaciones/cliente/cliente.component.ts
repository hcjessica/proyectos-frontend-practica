import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  modeloCliente = new Cliente();

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaClientes = false;
  hiddenCampoNombre = true;
  hiddenCampoRUC = true;

  clientes: Cliente[] = [
    {id: 1, nombre: "SUNATI" , ruc: "10459624301", direccion: "Av. PROLONGACIÓN 233"},
    {id: 2, nombre: "PETROPERUVIAN" , ruc: "20123456789", direccion: "Av. AREQUIPA 100"},
    {id: 3, nombre: "CENCOSAD" , ruc: "20600444440", direccion: "Av. LUREN 500"},
    {id: 4, nombre: "LUBELUXE" , ruc: "10450286321", direccion: "Av. BRASIL 640"},
  ];

  crearCliente(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaClientes = true;
    this.modeloCliente.id = this.clientes.length + 1;
  }

  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaClientes = false;
    this.limpiarFormCliente();
  }

  guardarCliente(){
    if(this.validarDatosCliente()){
      this.clientes.push({id: this.modeloCliente.id, nombre: this.modeloCliente.nombre?.toUpperCase(), ruc: this.modeloCliente.ruc, direccion: this.modeloCliente.direccion?.toUpperCase()});

      this.limpiarFormCliente();

      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaClientes = false;

      Swal.fire({
        icon: "info",
        title: "Información",
        text: "Se ha registrado el cliente exitosamente"
      });
      //console.log(this.clientes);
    }
  }

  validarDatosCliente(){
    let rpsta = true;
    this.hiddenCampoNombre = true;
    this.hiddenCampoRUC = true;

    if(!this.modeloCliente.nombre){
      this.hiddenCampoNombre = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el nombre del cliente"
      });
      rpsta = false;
    }else if(!this.modeloCliente.ruc){
      this.hiddenCampoRUC = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el ruc del cliente"
      });
      rpsta = false;
    }else if(!(/^[0-9]{11}$/).test(this.modeloCliente.ruc)){
      this.hiddenCampoRUC = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "RUC inválido, debe ingresar 11 dígitos numéricos"
      });
      rpsta = false;
    }
    return rpsta;
  }

  limpiarFormCliente(){
    this.modeloCliente.id = this.clientes.length + 1;
    this.modeloCliente.nombre = "";
    this.modeloCliente.ruc = "";
    this.modeloCliente.direccion = "";
  }
}
