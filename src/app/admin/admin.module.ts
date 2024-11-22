import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { AppComponent } from '../app.component';
import { PrincipalComponent } from '../principal/principal.component';
import { JoinSelectionComponent } from '../join-selection/join-selection.component';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component'; // Importar el componente
import { RegisterFreelancerComponent } from '../register-freelancer/register-freelancer.component';
import { LoginComponent } from '../login/login.component';
import { routes } from '../app.routes';
import { FreelancerSectionComponent } from '../freelancer-section/freelancer-section.component';
import { ProfileCustomerComponent } from '../profile-customer/profile-customer.component'; 
import { ForgotComponent } from '../forgot/forgot.component';
import { ProjectSectionComponent } from '../project-section/project-section.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { ProfileFreelancerVistaCComponent } from '../profile-freelancer-vista-c/profile-freelancer-vista-c.component';
import { ProfileCustomerVistaDComponent } from '../profile-customer-vista-d/profile-customer-vista-d.component';
import { EditProfileCustomerComponent } from '../edit-profile-customer/edit-profile-customer.component';
import { CrearProyectoComponent } from '../crear-proyecto/crear-proyecto.component';
import { ModifyProjectComponent } from '../modify-project/modify-project.component';
import { ViewProjectComponent } from '../view-project/view-project.component';
import { HireDeveloperComponent } from '../hire-developer/hire-developer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { RevisarPortafoliosFreelancerComponent } from '../revisar-portafolios-freelancer/revisar-portafolios-freelancer.component';
import { HistorialProyectosComponent } from '../historial-proyectos/historial-proyectos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorialProyectosDeveloperComponent } from '../historial-proyectos-developer/historial-proyectos-developer.component';
import { SolicitarCambiosComponent } from '../solicitar-cambios/solicitar-cambios.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    JoinSelectionComponent,
    RegisterCustomerComponent,
    RegisterFreelancerComponent,
    LoginComponent,
    FreelancerSectionComponent,
    ProfileCustomerComponent,
    ForgotComponent,
    ProjectSectionComponent,
    ChangePasswordComponent,
    ProfileFreelancerVistaCComponent,
    ProfileCustomerVistaDComponent,
    EditProfileCustomerComponent,
    CrearProyectoComponent,
    ModifyProjectComponent,
    ViewProjectComponent,
    HireDeveloperComponent,
    HeaderComponent,
    RevisarPortafoliosFreelancerComponent,
    HistorialProyectosComponent,
    ReactiveFormsModule,
    HistorialProyectosDeveloperComponent,
    SolicitarCambiosComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AdminModule { }
