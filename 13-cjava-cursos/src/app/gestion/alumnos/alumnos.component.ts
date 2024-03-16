import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { Alumno } from './alumno';
import { CabeceraComponent } from '../../utiles/cabecera/cabecera.component';
import { PieComponent } from '../../utiles/pie/pie.component';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, PieComponent],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  //valores poir default
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaAlumnos = false;
  hiddenCampoNombre = true;
  hiddenCampoApellidos = true;
  hiddenCampoCorreo = true;
  hiddenCampoTelefono = true;
  modeloAlumno = new Alumno();

  alumnos: Alumno[] = [
    {id: 1, nombres: "Esteban Leonardo", apellidos: "Román Torres", fecnac: "1994-07-01", direccion: "Av. San Lorenzo 432", correo: "esteban34@gmail.com", telefono: "987458100"},
    {id: 2, nombres: "Ana María", apellidos: "González Pérez", fecnac: "1985-04-15", direccion: "Calle Las Rosas 123", correo: "anita85@hotmail.com", telefono: "987654321"},
    {id: 3, nombres: "Carlos Alberto", apellidos: "Díaz López", fecnac: "1990-12-28", direccion: "Jirón Los Pinos 567", correo: "carlitos90@yahoo.com", telefono: "987123456"},
    {id: 4, nombres: "María Fernanda", apellidos: "Sánchez Rodríguez", fecnac: "1988-09-03", direccion: "Pasaje Las Orquídeas 789", correo: "mariaf89@gmail.com", telefono: "987987987"},
    {id: 5, nombres: "Juan Carlos", apellidos: "Martínez González", fecnac: "1997-02-20", direccion: "Avenida Los Laureles 234", correo: "juanc97@hotmail.com", telefono: "987456123"},
    {id: 6, nombres: "Luisa Alejandra", apellidos: "Pérez Díaz", fecnac: "1983-11-10", direccion: "Calle Las Palmeras 567", correo: "luisa83@yahoo.com", telefono: "987789456"},
    {id: 7, nombres: "Pedro José", apellidos: "Gómez Castro", fecnac: "1995-06-25", direccion: "Jirón Las Gardenias 890", correo: "pedrojose95@gmail.com", telefono: "987654789"},
    {id: 8, nombres: "Rosa María", apellidos: "López Soto", fecnac: "1989-03-18", direccion: "Avenida Las Margaritas 123", correo: "rosam89@hotmail.com", telefono: "987123789"},
    {id: 9, nombres: "Miguel Ángel", apellidos: "Rodríguez Vargas", fecnac: "1992-08-05", direccion: "Pasaje Los Sauces 456", correo: "miguelangel92@yahoo.com", telefono: "987987654"},
    {id: 10, nombres: "Carolina Andrea", apellidos: "Fernández Pérez", fecnac: "1987-05-12", direccion: "Calle Los Cerezos 789", correo: "carolina87@gmail.com", telefono: "987456789"},
    {id: 11, nombres: "Jorge Luis", apellidos: "Soto Ramírez", fecnac: "1996-10-30", direccion: "Avenida Los Alamos 234", correo: "jorgel96@hotmail.com", telefono: "987123789"},
    {id: 12, nombres: "Marisol", apellidos: "Hernández Torres", fecnac: "1984-02-14", direccion: "Calle Los Tulipanes 567", correo: "marisol84@yahoo.com", telefono: "987789456"},
    {id: 13, nombres: "Ricardo", apellidos: "Ramírez García", fecnac: "1991-07-07", direccion: "Pasaje Los Robles 890", correo: "ricardo91@gmail.com", telefono: "987654321"},
    {id: 14, nombres: "Gloria Patricia", apellidos: "Gutiérrez Sánchez", fecnac: "1986-11-22", direccion: "Avenida Las Azucenas 123", correo: "gloriap86@hotmail.com", telefono: "987987654"},
    {id: 15, nombres: "Roberto", apellidos: "López Pérez", fecnac: "1993-04-05", direccion: "Calle Los Girasoles 456", correo: "roberto93@yahoo.com", telefono: "987456789"},
    {id: 16, nombres: "Susana", apellidos: "Castillo Vásquez", fecnac: "1982-09-19", direccion: "Pasaje Las Begonias 789", correo: "susana82@gmail.com", telefono: "987123987"}
  ];

  crearAlumno(){
    console.log("crear alumno");
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaAlumnos = true;
    this.modeloAlumno.id = this.alumnos.length + 1;
  }
  guardarAlumno(){
    if(this.validarDatosAlumno()){
      
    }
  }
  validarDatosAlumno(){
    let rpsta = false;
    if(!this.modeloAlumno.nombres){
      this.hiddenCampoNombre = false;
      alert("Brinde el nombre del alumno");
    }else if(!this.modeloAlumno.apellidos){
      this.hiddenCampoApellidos = false;
      alert("Brinde los apellidos del alumno");
    }else if(!this.modeloAlumno.correo){
      this.hiddenCampoCorreo = false;
      alert("Brinde el correo del alumno");
    }else if(!this.modeloAlumno.telefono){
      this.hiddenCampoTelefono = false;
      alert("Brinde el teléfono del alumno");
    }else if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(this.modeloAlumno.correo)){
      this.hiddenCampoCorreo = false;
      alert("Correo electrónico inválido, debe ingresar un correo");
    }else if(!(/^[0-9]{9}$/).test(this.modeloAlumno.telefono)){
      this.hiddenCampoTelefono = false;
      alert("Teléfono inválido, debe ingresar 9 dígitos numéricos");
    }
    return rpsta;
  }
}
