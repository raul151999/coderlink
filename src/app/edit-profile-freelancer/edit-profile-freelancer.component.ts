import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-freelancer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-profile-freelancer.component.html',
  styleUrl: './edit-profile-freelancer.component.scss'
})
export class EditProfileFreelancerComponent {
  linkportafolio: string = '';
  nombreusuario: string = '';
  tarifa: number = 0;
  email: string = '';
  password: string = '';
  companyName: string = '';

  constructor(private router: Router) {}

  save(): void {
    console.log('Guardar cambios');
    alert('Se ha guardado correctamente los cambios');
    this.router.navigate(['/profile-freelancer'])
  }

  cancel(): void {
    const confirmation = window.confirm('Seguro que deseas cancelar los cambios?');
    if(confirmation) {
    this.router.navigate(['/profile-freelancer'])
  }
}

  goToChangePassword(): void {
    console.log('Cambiar contraseña');
    this.router.navigate(['/change-password-freelancer']);
  }
  validateNumberInput(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^\d$/.test(inputChar)) {
      event.preventDefault();
    }
  }
}
