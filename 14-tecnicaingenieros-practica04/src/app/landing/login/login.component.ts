import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; //para usar directivas
import { FormsModule } from '@angular/forms';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  hiddenCampoUsuario = true;
  hiddenCampoContrasenia = true;
  modeloUsuario = new Usuario("fhuancollo", "fhuancollo");

  usuarios: Usuario[] = [
    {id: 1, nombreUsuario: "fhuancollo", contrasenia: "fhuancollo"},
    {id: 2, nombreUsuario: "elopez", contrasenia: "elopez"},
    {id: 3, nombreUsuario: "mgarcia", contrasenia: "mgarcia"},
    {id: 4, nombreUsuario: "prueba", contrasenia: "123456"}
  ];

  ingresarIntranet(){
    if(this.validarUsuario()){
        this.router.navigate(['/inicio']);
    }
  }

  validarUsuario(){
    let rpsta = true;
    this.hiddenCampoUsuario = true;
    this.hiddenCampoContrasenia = true;
    let usuarioEncontrado = this.usuarios.find((usuario: Usuario) => usuario.nombreUsuario === this.modeloUsuario.nombreUsuario && usuario.contrasenia === this.modeloUsuario.contrasenia);

    if(!this.modeloUsuario.nombreUsuario){
      this.hiddenCampoUsuario = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde su nombre de usuario"
      });
      rpsta = false;
    }else if(!this.modeloUsuario.contrasenia){
      this.hiddenCampoContrasenia = false;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Brinde su contraseña"
      });
      rpsta = false;
    }else if(!usuarioEncontrado){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Datos inválidos, usuario no encontrado"
      });
      rpsta = false;
    }
    return rpsta;
  }
}
