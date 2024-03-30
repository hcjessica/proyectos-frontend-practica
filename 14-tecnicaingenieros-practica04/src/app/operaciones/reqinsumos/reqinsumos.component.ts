import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { Proyecto } from '../proyecto/proyecto';
import { Cliente } from '../cliente/cliente';
import { Insumo } from '../../logistica/inventario/insumo';
import { ReqInsumo } from './reqinsumo';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reqinsumos',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent,],
  templateUrl: './reqinsumos.component.html',
  styleUrl: './reqinsumos.component.css'
})
export class ReqinsumosComponent {
  @ViewChild('campoProyecto') campoProyecto!: ElementRef;

  //valores poir default
  modeloReqInsumo = new ReqInsumo();

  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaReqInsumos = false;
  hiddenCampoProyecto = true;
  hiddenCampoFecEntrega = true;
  hiddenCampoNUrgencia = true;
  hiddenCampoInsumo = true;
  codproyecto?: string = "";
  descripproyecto?: string = "";
  nomcliente?: string = "";
  valorNombreCliente?:string = "";

  arrayNivelUrgencia: { [key: number]: string } = {
    1: "ALTA",
    2: "MEDIA",
    3: "BAJA"
  };

  proyectos: Proyecto[] = [
    {id: 1, codigo: "P24-SUN-C001" , descripcion: "ESTUDIO SUNATI", idTipoProyecto: 3, idStatus: 2, idCliente: 1},
    {id: 2, codigo: "P24-PET-I002" , descripcion: "INSTALACIONES PETROPERUVIAN", idTipoProyecto: 3, idStatus: 1, idCliente: 2},
    {id: 3, codigo: "P24-CEN-M001" , descripcion: "MANTENIMIENTO DE INSTALACIONES DE CENCOSAD", idTipoProyecto: 1, idStatus: 4, idCliente: 3},
    {id: 4, codigo: "P24-LUB-C003" , descripcion: "REVISIÓN E INSTALACIÓN DE SEDES LUBELUXE", idTipoProyecto: 4, idStatus: 3, idCliente: 4},
    {id: 5, codigo: "P24-LUB-C002" , descripcion: "REVISIÓN E INSTALACIÓN DE SEDES LUBELUXE II", idTipoProyecto: 4, idStatus: 3, idCliente: 4},
  ];

  clientes: Cliente[] = [
    {id: 1, nombre: "SUNATI" , ruc: "10459624301", direccion: "Av. PROLONGACIÓN 233"},
    {id: 2, nombre: "PETROPERUVIAN" , ruc: "20123456789", direccion: "Av. AREQUIPA 100"},
    {id: 3, nombre: "CENCOSAD" , ruc: "20600444440", direccion: "Av. LUREN 500"},
    {id: 4, nombre: "LUBELUXE" , ruc: "10450286321", direccion: "Av. BRASIL 640"},
  ];

  insumos: Insumo[] = [
    {id: 1, descripcion: "JUEGO DE ALICATES AISLADOS 1000V" , stock: 35, idUnidadMedida: 1},
    {id: 2, descripcion: "REPUESTOS INSTRUMENTOS" , stock: 10, idUnidadMedida: 2},
    {id: 3, descripcion: "HOJAS BOND A4" , stock: 10, idUnidadMedida: 3},
    {id: 4, descripcion: "KIT LIMPIEZA LAPTOP, TABLET, LUNAS ESPCIALES" , stock: 20, idUnidadMedida: 4}
  ];

  reqinsumos: ReqInsumo[] = [
    {id: 1, idProyecto: 1, fechaEntrega: "2024-03-30", idNivelUrgencia: 1, idInsumo: 1, Comentarios: "REQUERIMIENTO DE PRUEBA"},
    {id: 2, idProyecto: 3, fechaEntrega: "2024-03-10", idNivelUrgencia: 2, idInsumo: 2, Comentarios: "--"},
    {id: 3, idProyecto: 2, fechaEntrega: "2024-03-15", idNivelUrgencia: 3, idInsumo: 1, Comentarios: "TERCER REQUERIMIENTO"},
    {id: 4, idProyecto: 5, fechaEntrega: "2024-04-02", idNivelUrgencia: 1, idInsumo: 3, Comentarios: ""}
  ];

  crearReqInsumo(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaReqInsumos = true;
    this.modeloReqInsumo.id = this.reqinsumos.length + 1;
  }

  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaReqInsumos = false;
    this.limpiarFormReqInsumo();
  }

  obtenerDatosProyecto(){
    const valorSeleccionadoProyecto = this.campoProyecto.nativeElement.value;
    let proyectoSeleccionado = this.proyectos.find((proyecto: Proyecto) => proyecto.id === Number(valorSeleccionadoProyecto));

    this.codproyecto = proyectoSeleccionado?.codigo;
    this.descripproyecto = proyectoSeleccionado?.descripcion;
    if(proyectoSeleccionado?.idCliente){
      this.nomcliente = this.clientes[proyectoSeleccionado.idCliente - 1].nombre;
    }
  }

  obtenerNomCliente(idCliente?: number){
    const clienteEncontrado = this.clientes.find((cliente: Cliente) => cliente.id === idCliente);
    if (clienteEncontrado) {
      this.valorNombreCliente = clienteEncontrado?.nombre; // Asignar solo el nombre del cliente
    }
    return this.valorNombreCliente;
  }

  guardarReqInsumos(){
    if(this.validarDatosReqInsumo()){
      this.reqinsumos.push({id: this.modeloReqInsumo.id, idProyecto: this.modeloReqInsumo.idProyecto, fechaEntrega: this.modeloReqInsumo.fechaEntrega, idNivelUrgencia: this.modeloReqInsumo.idNivelUrgencia, idInsumo: this.modeloReqInsumo.idInsumo, Comentarios: this.modeloReqInsumo.Comentarios?.toUpperCase()});

      this.limpiarFormReqInsumo();

      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaReqInsumos = false;

      Swal.fire({
        icon: "info",
        title: "Información",
        text: "Se ha registrado el requerimiento de insumo exitosamente"
      });
      //console.log(this.reqinsumos);
    }
  }

  validarDatosReqInsumo(){
    let rpsta = true;
    this.hiddenCampoProyecto = true;
    this.hiddenCampoFecEntrega = true;
    this.hiddenCampoNUrgencia = true;
    this.hiddenCampoInsumo = true;

    if(!this.modeloReqInsumo.idProyecto){
      this.hiddenCampoProyecto = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione el proyecto"
      });
      rpsta = false;
    }else if(!this.modeloReqInsumo.fechaEntrega){
      this.hiddenCampoFecEntrega = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione la fecha de entrega del requerimiento"
      });
      rpsta = false;
    }else if(!this.modeloReqInsumo.idNivelUrgencia){
      this.hiddenCampoNUrgencia = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione el nivel de urgencia del requerimiento"
      });
      rpsta = false;
    }else if(!this.modeloReqInsumo.idInsumo){
      this.hiddenCampoInsumo = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione el insumo del requerimiento"
      });
      rpsta = false;
    }
    return rpsta;
  }

  limpiarFormReqInsumo(){
    this.modeloReqInsumo.id = this.reqinsumos.length + 1;
    this.modeloReqInsumo.idProyecto = undefined;
    this.modeloReqInsumo.fechaEntrega = "";
    this.modeloReqInsumo.idNivelUrgencia = undefined;
    this.modeloReqInsumo.idInsumo = undefined;
    this.modeloReqInsumo.Comentarios = "";
    this.codproyecto = "";
    this.descripproyecto = "";
    this.nomcliente = "";
  }
}
