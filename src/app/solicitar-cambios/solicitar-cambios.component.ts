import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-solicitar-cambios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './solicitar-cambios.component.html',
  styleUrl: './solicitar-cambios.component.scss'
})
export class SolicitarCambiosComponent {

  descripcion: string = '';
  selectedFile: File | null = null;

  constructor (private router: Router) {}

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.descripcion) {
      console.log('Formulario enviado:');
      console.log('Descripción:', this.descripcion);
      console.log('Archivo:', this.selectedFile);
      alert('Solicitud enviada con éxito.');
      this.router.navigate(['/view-project']);
    }
  }

  // Handle cancel action
  onCancel(): void {
    if (confirm('¿Estás seguro de que deseas cancelar la solicitud?')) {
      this.descripcion = '';
      this.selectedFile = null;
      this.router.navigate(['/view-project']);
    }
  }
}
