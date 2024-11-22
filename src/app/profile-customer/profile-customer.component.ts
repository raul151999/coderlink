import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForOf,NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-customer',
  standalone:true,
  imports: [NgIf,NgForOf],  
  templateUrl: './profile-customer.component.html',
  styleUrls: ['./profile-customer.component.scss']
})
export class ProfileCustomerComponent {
  customer = {
    name: 'John Doe',
    description: 'Desarrollador y cliente de software buscando talentos.',
    projects: [
      {
        id: 1,
        title: 'Desarrollo de sitio web',
        description: 'Buscando un freelancer para desarrollar un sitio web moderno.'
      },
      {
        id: 2,
        title: 'Aplicación móvil',
        description: 'Necesito un desarrollador para crear una aplicación móvil nativa.'
      }
    ]
  };

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']); // Cambia '/home' a la ruta de la página principal en tu proyecto
  }

  editProfile() {
    // Redirige a la página de edición de perfil
    this.router.navigate(['/edit-profile-customer']);
  }

  goToFavorites() {
    // Redirige a la ruta correcta de favoritos
    this.router.navigate(['/ver-desarrolladores-favoritos']); // Asegúrate de que esta ruta esté bien configurada
  }

  createProject() {
    // Redirige a la página de creación de proyectos
    this.router.navigate(['/crear-proyecto']);
  }

  viewProject(projectId: number) {
    // Lógica para ver el proyecto
    console.log(`Viendo el proyecto con ID: ${projectId}`);
    this.router.navigate(['/view-project'])
  }
  verproyecto() {
    this.router.navigate(['/historial-proyectos']);
  }
}
