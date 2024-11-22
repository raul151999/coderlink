import { Component } from '@angular/core';
import { NgFor,NgIf,NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-freelancer-sectiont',
  standalone:true,
  imports: [NgIf,NgFor,NgClass,FormsModule],
  templateUrl: './freelancer-section.component.html',
  styleUrls: ['./freelancer-section.component.scss'] // Asegúrate de que sea 'styleUrls', no 'styleUrl'
})
export class FreelancerSectionComponent {
  
  constructor (private router: Router) {}
  freelancers = [
    {
      name: 'Juan Herrera Mariños',
      description: 'Pequeña descripción',
      rating: 5.0,
      reviews: 10,
      hourlyRate: 50,
      imageUrl: 'assets/profile-placeholder.png',
      isFavorite: false
    },
    {
      name: 'Nombres y Apellidos',
      description: 'Pequeña descripción',
      rating: 5.0,
      reviews: 10,
      hourlyRate: 50,
      imageUrl: 'assets/profile-placeholder.png',
      isFavorite: false
    }
  ];

  setFavorite(freelancer: any): void {
    if (!freelancer.isFavorite) {
      freelancer.isFavorite = true;
    }
  }

  // Método para manejar el filtrado (ejemplo simple)
  filterFreelancers() {
    
  }

  // Método para ver el perfil del freelancer
  viewProfile() {
    this.router.navigate(['/revisar-portafolios-freelancer']);
    
  }
}
