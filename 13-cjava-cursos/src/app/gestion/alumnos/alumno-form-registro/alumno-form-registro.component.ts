import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-alumno-form-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumno-form-registro.component.html',
  styleUrl: './alumno-form-registro.component.css'
})
export class AlumnoFormRegistroComponent {
  modeloAlumno = new Alumno();
  enviado = false;
  guardarAlumno(){
  }
}
