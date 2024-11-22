import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-project',
  standalone: true,
  imports: [NgIf],
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent {
  @Input() project: any; // Recibe los detalles del proyecto como entrada

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/profile-customer']); // Cambia '/projects' por la ruta a la que quieras redirigir
  }

  editProject() {
    console.log('Modificando el proyecto:', this.project);
    this.router.navigate(['/solicitar-cambios']); // Redirige a la página de modificación
  }

  deleteProject() {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este proyecto?');
    
    if (confirmDelete) {
      console.log('Eliminando el proyecto:', this.project);
      // Redirige a la página deseada después de la confirmación
      this.router.navigate(['/profile-customer']); // Cambia '/deleted-project' por la ruta que desees
    } else {
      console.log('Eliminación cancelada');
    }
  }
}