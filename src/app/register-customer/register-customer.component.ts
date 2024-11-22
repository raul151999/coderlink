import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, RouterModule],
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent {
  customer = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  showSuccessModal = false;

  constructor(private router: Router) {}

  register() {

    if (!this.customer.username || this.customer.username.trim() === '') {
      alert('El nombre de usuario es obligatorio.');
      return;
    }
    if (this.customer.password === this.customer.confirmPassword) {
      // Lógica para el registro de clientes
      console.log('Cliente registrado:', this.customer);
      this.showSuccessModal = true;
    } else {
      alert('Las contraseñas no coinciden.');
    }
    
  }
  closeModal() {
    this.showSuccessModal = false;
    this.router.navigate(['/login']);
  }
  openGoogleAuth() {
    const googleAuthURL = 'https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ARpgrqfahPgL75ggfdYMLu8k27GCVDPwO9gSM48fIpyW_5eFhu9xcvJ0WFDZ_yBKLHv6FyAqHptJsg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1743138878%3A1727373242782840&ddm=0';
    window.open(googleAuthURL, '_blanck');
  }
}
