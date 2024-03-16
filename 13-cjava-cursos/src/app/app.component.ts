import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './utiles/cabecera/cabecera.component';
import { CarruselComponent } from './utiles/carrusel/carrusel.component'; 
import { PieComponent } from './utiles/pie/pie.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, CarruselComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Principal | CJava Cursos';
}
