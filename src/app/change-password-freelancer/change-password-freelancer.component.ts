import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-freelancer',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './change-password-freelancer.component.html',
  styleUrl: './change-password-freelancer.component.scss'
})
export class ChangePasswordFreelancerComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private router: Router) {}

      cambiarContrasena(event: Event): void {
         event.preventDefault();

    // Validar si la nueva contraseña cumple con los requisitos
    if (this.newPassword.length >= 6 && this.newPassword === this.confirmPassword) {
      // Simulamos la lógica de cambio de contraseña
      // Mostramos la alerta de éxito
      window.alert('Contraseña cambiada con éxito');
      
      // Redirigir a la página de edición del perfil
      this.router.navigate(['/edit-profile-freelancer']);
    } else {
      // Mostrar mensajes de error en la pantalla
      if (this.newPassword.length < 6) {
        this.message = 'La nueva contraseña debe tener al menos 6 caracteres.';
      } else if (this.newPassword !== this.confirmPassword) {
        this.message = 'Las contraseñas no coinciden.';
      }
    }
  }
  goBack() {
    this.router.navigate(['/edit-profile-freelancer']); // Redirige a la página principal
  }
}
