import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-freelancer',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './profile-freelancer.component.html',
  styleUrl: './profile-freelancer.component.scss'
})
export class ProfileFreelancerComponent {

  portfolioLink: String | null = 'https://mi-portafolio.com';
  skills: String[] = ['Diseño de sitios web', 'Desarrollo Frontend', 'CSS', 'Desarrollador Backend'];

  constructor(private router: Router) {}

    goToHome() {
      this.router.navigate(['/']);
    }
    verproyecto() {
      this.router.navigate(['/developer-historial-proyectos']);
    }
    editarperfil() {
      this.router.navigate(['/edit-profile-freelancer'])
    }
}
