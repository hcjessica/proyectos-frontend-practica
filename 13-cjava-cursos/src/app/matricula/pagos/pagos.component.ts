import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { Pago } from './pago'; 
import { CabeceraComponent } from '../../utiles/cabecera/cabecera.component';
import { PieComponent } from '../../utiles/pie/pie.component';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, PieComponent],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent {

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaPagos = false;
  hiddenCampoNroTarjeta = true;
  hiddenCampoFechaExp = true;
  hiddenCampoTitular = true;
  hiddenCampoCodSeguridad = true;
  hiddenCampoNroCuotas = true;
  modeloPago = new Pago();

  arrayCuotas: { [key: number]: string } = {
    1: "sin cuotas",
    2: "3 cuotas",
    3: "6 cuotas",
    4: "9 cuotas",
    5: "12 cuotas",
    6: "18 cuotas",
    7: "24 cuotas"
  };

  pagos: Pago[] = [
    {id: 1, nroTarjeta: "4111111111111111", fechaExpiracion: "2024-04", titular: "Francisco Olaya", codSeguridad: "159", nroCuotas: 2},
    {id: 2, nroTarjeta: "2111111111111111", fechaExpiracion: "2027-06", titular: "Renzo Olaya", codSeguridad: "052", nroCuotas: 1},
    {id: 3, nroTarjeta: "3111111111111111", fechaExpiracion: "2027-04", titular: "Tania Tello", codSeguridad: "069", nroCuotas: 3},
    {id: 4, nroTarjeta: "1111111111111111", fechaExpiracion: "2028-05", titular: "Teresa Boccio", codSeguridad: "054", nroCuotas: 3},
    {id: 5, nroTarjeta: "7111111111111111", fechaExpiracion: "2025-06", titular: "Anna Martinez", codSeguridad: "068", nroCuotas: 2}
  ];

  crearPago(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaPagos = true;
    this.modeloPago.id = this.pagos.length + 1;
  }
  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaPagos = false;
    this.limpiarFormPago();
  }
  guardarPago(){
    if(this.validarDatosPago()){
      this.pagos.push({id: this.modeloPago.id, nroTarjeta: this.modeloPago.nroTarjeta?.replace(/\s/g, ''), fechaExpiracion: this.modeloPago.fechaExpiracion, titular: this.modeloPago.titular, codSeguridad: this.modeloPago.codSeguridad, nroCuotas: this.modeloPago.nroCuotas});

      this.limpiarFormPago();
      
      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaPagos = false;

      alert("Se ha registrado el pago exitosamente");
      
      //console.log(this.pagos);
    }
  }
  validarDatosPago(){
    let rpsta = true;
    this.hiddenCampoNroTarjeta = true;
    this.hiddenCampoFechaExp = true;
    this.hiddenCampoTitular = true;
    this.hiddenCampoCodSeguridad = true;
    this.hiddenCampoNroCuotas = true;

    if(!this.modeloPago.nroTarjeta){
      this.hiddenCampoNroTarjeta = false;
      alert("Brinde el número de la tarjeta");
      rpsta = false;
    }else if(!this.modeloPago.fechaExpiracion){
      this.hiddenCampoFechaExp = false;
      alert("Brinde la fecha de expiración");
      rpsta = false;
    }else if(!this.modeloPago.titular){
      this.hiddenCampoTitular = false;
      alert("Brinde el nombre del titular de la tarjeta");
      rpsta = false;
    }else if(!this.modeloPago.codSeguridad){
      this.hiddenCampoCodSeguridad = false;
      alert("Brinde el código de seguridad");
      rpsta = false;
    }else if(!this.modeloPago.nroCuotas){
      this.hiddenCampoNroCuotas = false;
      alert("Seleccione el nro. de cuotas");
      rpsta = false;
    }else if(!(/^[0-9]{16}$/).test(this.modeloPago.nroTarjeta.replace(/\s/g, ''))){
      this.hiddenCampoNroTarjeta = false;
      alert("Nro. de tarjeta inválido, debe ingresar 16 dígitos numéricos");
      rpsta = false;
    }else if(!(/^[0-9]{3}$/).test(this.modeloPago.codSeguridad)){
      this.hiddenCampoCodSeguridad = false;
      alert("Cod. de seguridad inválido, debe ingresar 3 dígitos numéricos");
      rpsta = false;
    }
    return rpsta;
  }
  limpiarFormPago(){
    this.modeloPago.id = this.pagos.length + 1;
    this.modeloPago.nroTarjeta = "";
    this.modeloPago.fechaExpiracion = "";
    this.modeloPago.titular = "";
    this.modeloPago.codSeguridad = "";
    this.modeloPago.nroCuotas = undefined;
  }
  formatoTarjeta(nroTarjeta: string): string {
    return nroTarjeta.replace(/\d{4}(?=\d)/g, '$& ');
  }
}
