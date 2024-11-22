import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';  // Importa la directiva NgForOf
import { Router } from '@angular/router';  // Importa el Router

@Component({
  selector: 'app-ver-desarrolladores-favoritos',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './ver-desarrolladores-favoritos.component.html',
  styleUrls: ['./ver-desarrolladores-favoritos.component.scss']
})
export class VerDesarrolladoresFavoritosComponent {
  freelancersFavoritos: any[] = [];

  constructor(private router: Router) {}  // Inyecta el servicio Router

  ngOnInit(): void {
    // Ejemplos de freelancers (simulados, para probar la interfaz)
    this.freelancersFavoritos = [
      {
        nombre: 'John Doe',
        apellido: 'Doe',
        descripcion: 'Desarrollador Full Stack con 5 años de experiencia en JavaScript, Angular y Node.js.',
        puntuacion: { estrellas: 5, cantidad: 10 },
        tarifa: 50
      },
      {
        nombre: 'Jane Smith',
        apellido: 'Smith',
        descripcion: 'Especialista en diseño UX/UI con experiencia en la creación de interfaces intuitivas.',
        puntuacion: { estrellas: 4, cantidad: 12 },
        tarifa: 40
      },
      {
        nombre: 'Carlos Martín',
        apellido: 'Martín',
        descripcion: 'Desarrollador Frontend con experiencia en React y Vue.js. Amante del código limpio.',
        puntuacion: { estrellas: 5, cantidad: 8 },
        tarifa: 45
      }
    ];
  }

  eliminarDeFavoritos(freelancer: any): void {
    this.freelancersFavoritos = this.freelancersFavoritos.filter(f => f !== freelancer);
  }

  // Método para navegar al perfil del cliente
  goToProfileCustomer(): void {
    this.router.navigate(['/profile-customer']);  // Redirige a la ruta 'profile-customer'
  }
}

