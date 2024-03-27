import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sugerencia } from './sugerencia';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sugerencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sugerencia.component.html',
  styleUrl: './sugerencia.component.css'
})
export class SugerenciaComponent {
  modeloSugerencia = new Sugerencia();
}
