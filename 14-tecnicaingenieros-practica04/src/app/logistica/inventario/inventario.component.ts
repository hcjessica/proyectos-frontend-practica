import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';
import { Insumo } from './insumo';


@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
  modeloInsumo = new Insumo();

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaInventario = false;
  hiddenCampoDescripcion = true;
  hiddenCampoStock = true;
  hiddenCampoUnidadMedida = true;

  arrayUMedida: { [key: number]: string } = {
    1: "UNIDAD",
    2: "GLOBAL",
    3: "PAQUETE",
    4: "GALÓN",
  };

  insumos: Insumo[] = [
    {id: 1, descripcion: "JUEGO DE ALICATES AISLADOS 1000V" , stock: 35, idUnidadMedida: 1},
    {id: 2, descripcion: "REPUESTOS INSTRUMENTOS" , stock: 10, idUnidadMedida: 2},
    {id: 3, descripcion: "HOJAS BOND A4" , stock: 10, idUnidadMedida: 3},
    {id: 4, descripcion: "KIT LIMPIEZA LAPTOP, TABLET, LUNAS ESPCIALES" , stock: 20, idUnidadMedida: 4}
  ];

  crearInsumo(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaInventario = true;
    this.modeloInsumo.id = this.insumos.length + 1;
  }

  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaInventario = false;
    this.limpiarFormInsumo();
  }

  guardarInsumo(){
    if(this.validarDatosInsumo()){
      this.insumos.push({id: this.modeloInsumo.id, descripcion: this.modeloInsumo.descripcion?.toUpperCase(), stock: this.modeloInsumo.stock, idUnidadMedida: this.modeloInsumo.idUnidadMedida});

      this.limpiarFormInsumo();

      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaInventario = false;

      Swal.fire({
        icon: "info",
        title: "Información",
        text: "Se ha registrado el insumo exitosamente"
      });
      //console.log(this.insumos);
    }
  }

  validarDatosInsumo(){
    let rpsta = true;
    this.hiddenCampoDescripcion = true;
    this.hiddenCampoStock = true;
    this.hiddenCampoUnidadMedida = true;

    if(!this.modeloInsumo.descripcion){
      this.hiddenCampoDescripcion = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el nombre del insumo"
      });
      rpsta = false;
    }else if(!this.modeloInsumo.stock){
      this.hiddenCampoStock = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde el stock del insumo"
      });
      rpsta = false;
    }else if(!this.modeloInsumo.idUnidadMedida){
      this.hiddenCampoUnidadMedida = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Seleccione la unidad de medida del insumo"
      });
      rpsta = false;
    }
    return rpsta;
  }

  limpiarFormInsumo(){
    this.modeloInsumo.id = this.insumos.length + 1;
    this.modeloInsumo.descripcion = "";
    this.modeloInsumo.stock = undefined;
    this.modeloInsumo.idUnidadMedida = undefined;
  }
}
