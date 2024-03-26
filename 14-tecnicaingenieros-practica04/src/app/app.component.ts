import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PieComponent } from './util/pie/pie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TEI - Proyectos Eléctricos';
}
