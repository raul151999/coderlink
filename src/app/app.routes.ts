import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { JoinSelectionComponent } from './join-selection/join-selection.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { LoginComponent } from './login/login.component';
import { FreelancerSectionComponent } from './freelancer-section/freelancer-section.component';
import { ProfileFreelancerComponent } from './profile-freelancer/profile-freelancer.component';
import { ProfileCustomerComponent } from './profile-customer/profile-customer.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ProjectSectionComponent } from './project-section/project-section.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileCustomerComponent } from './edit-profile-customer/edit-profile-customer.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ModifyProjectComponent } from './modify-project/modify-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { HireDeveloperComponent } from './hire-developer/hire-developer.component';
import { RevisarPortafoliosFreelancerComponent } from './revisar-portafolios-freelancer/revisar-portafolios-freelancer.component';
import { HistorialProyectosComponent } from './historial-proyectos/historial-proyectos.component';
import { VerDesarrolladoresFavoritosComponent } from './ver-desarrolladores-favoritos/ver-desarrolladores-favoritos.component';
import { HistorialProyectosDeveloperComponent } from './historial-proyectos-developer/historial-proyectos-developer.component';
import { SolicitarCambiosComponent } from './solicitar-cambios/solicitar-cambios.component';
import { EditProfileFreelancerComponent } from './edit-profile-freelancer/edit-profile-freelancer.component';
import { ChangePasswordFreelancerComponent } from './change-password-freelancer/change-password-freelancer.component';


export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'join', component: JoinSelectionComponent },
  { path: 'register-client', component: RegisterCustomerComponent },
  { path: 'register-freelancer', component: RegisterFreelancerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'freelancer', component: FreelancerSectionComponent },
  { path: 'profile-freelancer', component: ProfileFreelancerComponent },
  { path: 'profile-customer', component: ProfileCustomerComponent },
  { path: 'forgot', component: ForgotComponent},
  { path: 'project-section', component: ProjectSectionComponent},
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'edit-profile-customer', component: EditProfileCustomerComponent},
  { path: 'crear-proyecto', component: CrearProyectoComponent},
  { path: 'modify-project', component: ModifyProjectComponent},
  { path: 'view-project', component: ViewProjectComponent},
  { path: 'hire-developer', component: HireDeveloperComponent},
  { path: 'revisar-portafolios-freelancer', component: RevisarPortafoliosFreelancerComponent},
  { path: 'historial-proyectos', component: HistorialProyectosComponent},
  { path: 'ver-desarrolladores-favoritos', component: VerDesarrolladoresFavoritosComponent },
  { path: 'developer-historial-proyectos', component: HistorialProyectosDeveloperComponent},
  { path: 'solicitar-cambios', component: SolicitarCambiosComponent},
  { path: 'edit-profile-freelancer', component: EditProfileFreelancerComponent},
  { path: 'change-password-freelancer', component: ChangePasswordFreelancerComponent},
];
