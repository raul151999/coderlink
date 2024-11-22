import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [NgIf,NgFor,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  isLoading = false;

  constructor(private router: Router) {}

  goBack(){
    this.router.navigate(['/']);
  }

  login() {
    
    // Lógica para manejar el inicio de sesión
    console.log('Iniciando sesión con:', this.user);
    this.router.navigate(['/profile-freelancer']); // Redirige a la página del perfil del cliente

   // console.log('Iniciando sesion con:', this.user);
    //this.router.navigate(['/profile-freelancer']); // Redirige a la pagina del perfil del desarrollador
  }
}
