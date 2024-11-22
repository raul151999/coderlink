import { Component } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {
  jobs = [
    {
      id: 1,
      title: 'Desarrollo de Sitio Web',
      description: 'Busco un desarrollador web para crear un sitio de comercio electrónico.',
      price: 500,
    },
    {
      id: 2,
      title: 'Diseño Gráfico',
      description: 'Necesito un diseñador gráfico para un proyecto de marca.',
      price: 300,
    },
    {
      id: 3,
      title: 'Redacción de Contenido',
      description: 'Busco un redactor para crear contenido para mi blog.',
      price: 150,
    },
  ];

  viewJobDetails(jobId: number) {
    console.log('Ver detalles del trabajo:', jobId);
  }
}
