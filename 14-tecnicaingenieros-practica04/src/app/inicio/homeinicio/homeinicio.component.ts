import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../util/cabecera/cabecera.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homeinicio',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './homeinicio.component.html',
  styleUrl: './homeinicio.component.css'
})
export class HomeInicioComponent implements OnInit{
  
  ngOnInit(): void {
    this.darBienvenida();
  }

  darBienvenida(){
    Swal.fire({
      icon: "info",
      title: "Información",
      text: "Bienvenido al sistema"
    });
  }
}
