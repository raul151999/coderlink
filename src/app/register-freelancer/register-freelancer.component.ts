import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-freelancer',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, RouterModule],
  templateUrl: './register-freelancer.component.html',
  styleUrls: ['./register-freelancer.component.scss']
})
export class RegisterFreelancerComponent {
  freelancer = {
    firstName: '',
    lastName: '',
    email: '',
    portfolio: '',
    skills: '',
    experience: '',
    rate: null,
    password: '',
    confirmPassword: ''
  };

  showSuccessModal = false;

  constructor(private router: Router) {}

  register() {
    // Validar que la tarifa sea un número entero positivo mayor a 0
  if (this.freelancer.rate === null || this.freelancer.rate <= 0) {
    alert('Por favor, ingresa una tarifa válida (mayor a 0).');
    return;
  }

  // Validar que las contraseñas coincidan
  if (this.freelancer.password !== this.freelancer.confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;
  }

  // Lógica para el registro del freelancer
  console.log('Desarrollador registrado:', this.freelancer);
  this.showSuccessModal = true;
  }
  closeModal() {
    this.showSuccessModal = false;
    this.router.navigate(['/login']);
  }
}
