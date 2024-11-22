import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Freelancer {
  nombre: string;
  descripcion: string;
  web: string;
}

@Component({
  selector: 'app-revisar-portafolios-freelancer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './revisar-portafolios-freelancer.component.html',
  styleUrl: './revisar-portafolios-freelancer.component.scss'
})
export class RevisarPortafoliosFreelancerComponent {
  constructor (private router: Router) {}
  freelancers: Freelancer[] = [
    { nombre: 'Juan Herrera Mariños', descripcion: 'Descripcion de la pagina web brindada', web: 'https://github.com/raul151999/front-laboratorio' },
  ];
    openLink(url: string): void {
      window.open(url, '_blank');
    }
    navigateBack() {
      // Cambia '/freelancer' por la ruta que deseas
      this.router.navigate(['/freelancer']);
    }
}
