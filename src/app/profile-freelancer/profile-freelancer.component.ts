import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-freelancer',
  standalone: true,
  imports: [],
  templateUrl: './profile-freelancer.component.html',
  styleUrl: './profile-freelancer.component.scss'
})
export class ProfileFreelancerComponent {

  constructor(private router: Router) {}

    goToHome() {
      this.router.navigate(['/']);
    }
    verproyecto() {
      this.router.navigate(['/historial-proyectos']);
    }
}
