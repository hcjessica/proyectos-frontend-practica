import { Component, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';//para usar directivas
import { FormsModule } from '@angular/forms';
import { Alumno } from '../../gestion/alumnos/alumno';
import { Curso } from '../../gestion/cursos/curso';
import { Matricula } from '../matricula';
import { CabeceraComponent } from '../../utiles/cabecera/cabecera.component';
import { PieComponent } from '../../utiles/pie/pie.component';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, FormsModule, CabeceraComponent, PieComponent],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent {

  @ViewChild('campoAlumno') campoAlumno!: ElementRef;
  @ViewChild('campoCurso') campoCurso!: ElementRef;

  //valores poir default
  hiddenBtnCancelar = true;
  hiddenForm = true;
  hiddenBtnCrear = false;
  hiddenTablaMatriculas = false;
  hiddenCampoAlumno = true;
  hiddenCampoCurso = true;
  modeloMatricula = new Matricula();
  nombres?: string = "";
  apellidos?: string = "";
  fecnac?: string = "";
  direccion?: string = "";
  correo?: string = "";
  telefono?: string = "";
  nombre ?: string = "";
  horas ?: number;
  creditos ?: number;
  categoria ?: number = 0;
  descripCategoria ?: string = "";

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
  
  arrayCategoria: { [key: number]: string } = {
    1: "software",
    2: "gestión",
    3: "otros"
  };

  cursos: Curso[] = [
    {id: 1, nombre: "Java", horas: 24, creditos: 4, categoria: 1},
    {id: 2, nombre: "C#", horas: 20, creditos: 4, categoria: 1},
    {id: 3, nombre: "Python", horas: 24, creditos: 5, categoria: 1},
    {id: 4, nombre: "Buenas practicas en programación", horas: 24, creditos: 5, categoria: 2},
    {id: 5, nombre: "Inglés Básico", horas: 24, creditos: 5, categoria: 3}
  ];

  matriculas: Matricula[] = [
    {id: 1, idAlumno: 5, idCurso: 2},
    {id: 2, idAlumno: 6, idCurso: 1},
    {id: 3, idAlumno: 3, idCurso: 1},
    {id: 4, idAlumno: 7, idCurso: 2},
    {id: 5, idAlumno: 9, idCurso: 3},
    {id: 6, idAlumno: 10, idCurso: 5},
    {id: 7, idAlumno: 10, idCurso: 1},
    {id: 8, idAlumno: 14, idCurso: 3},
    {id: 9, idAlumno: 1, idCurso: 3},
  ];
  //console.log(this.cursos.find((curso: Curso) => curso.id === 1)?.nombre);

  crearMatricula(){
    this.hiddenBtnCancelar = false;
    this.hiddenForm = false;
    this.hiddenBtnCrear = true;
    this.hiddenTablaMatriculas = true;
    this.modeloMatricula.id = this.matriculas.length + 1;
  }
  obtenerDatosAlumno(){
    const valorSeleccionadoAlumno = this.campoAlumno.nativeElement.value;
    let alumnoSeleccionado = this.alumnos.find((alumno: Alumno) => alumno.id === Number(valorSeleccionadoAlumno));

    this.nombres = alumnoSeleccionado?.nombres;
    this.apellidos = alumnoSeleccionado?.apellidos;
    this.fecnac = alumnoSeleccionado?.fecnac;
    this.direccion = alumnoSeleccionado?.direccion;
    this.correo = alumnoSeleccionado?.correo;
    this.telefono = alumnoSeleccionado?.telefono;
  }
  obtenerDatosCurso(){
    const valorSeleccionadoCurso = this.campoCurso.nativeElement.value;
    let cursoSeleccionado = this.cursos.find((curso: Curso) => curso.id === Number(valorSeleccionadoCurso));

    this.nombre = cursoSeleccionado?.nombre;
    this.horas = cursoSeleccionado?.horas;
    this.creditos = cursoSeleccionado?.creditos;
    this.categoria = cursoSeleccionado?.categoria;
    
    if(this.categoria == 1){
      this.descripCategoria = "software";
    }else if(this.categoria == 2){
      this.descripCategoria = "gestión";
    }else if(this.categoria == 3){
      this.descripCategoria = "otros";
    }
  }
  cancelarRegistro(){
    this.hiddenBtnCancelar = true;
    this.hiddenForm = true;
    this.hiddenBtnCrear = false;
    this.hiddenTablaMatriculas = false;
    this.limpiarFormMatricula();
  }
  guardarMatricula(){
    if(this.validarDatosMatricula()){
      this.matriculas.push({id: this.modeloMatricula.id, idAlumno: this.modeloMatricula.idAlumno, idCurso: this.modeloMatricula.idCurso});

      this.limpiarFormMatricula();
      
      this.hiddenForm = true;
      this.hiddenBtnCrear = false;
      this.hiddenTablaMatriculas = false;

      alert("Se ha registrado la matrícula exitosamente");
      
      //console.log(this.matriculas);
    }
  }
  validarDatosMatricula(){
    let rpsta = true;
    this.hiddenCampoAlumno = true;
    this.hiddenCampoCurso = true;

    if(!this.modeloMatricula.idAlumno){
      this.hiddenCampoAlumno = false;
      alert("Seleccione el alumno");
      rpsta = false;
    }else if(!this.modeloMatricula.idCurso){
      this.hiddenCampoCurso = false;
      alert("Seleccione el curso");
      rpsta = false;
    }
    return rpsta;
  }
  limpiarFormMatricula(){
    this.modeloMatricula.id = this.matriculas.length + 1;
    this.modeloMatricula.idAlumno = undefined;
    this.nombres = "";
    this.apellidos = "";
    this.fecnac = "";
    this.direccion = "";
    this.correo = "";
    this.telefono = "";
    this.modeloMatricula.idCurso = undefined;
    this.nombre = "";
    this.horas = undefined;
    this.creditos = undefined;
    this.descripCategoria = "";
  }
}
