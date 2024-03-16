import { Routes } from '@angular/router';
import { InicioComponent } from './principal/inicio/inicio.component'; 
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { MatriculaComponent } from './matricula/matricula/matricula.component'; 

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: InicioComponent},
    { path: 'alumnos', component: AlumnosComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'matriculas', component: MatriculaComponent},
];
