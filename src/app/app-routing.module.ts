import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ListeMaladieComponent } from './maladie/liste-maladie/liste-maladie.component';
import { ListMedecinsComponent } from './medecins/list-medecins/list-medecins.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { ListPatientComponent } from './patient/list-patient/list-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { RegisterComponent } from './register/register/register.component';
import { ListeRendezVousComponent } from './rendez-vous/liste-rendez-vous/liste-rendez-vous.component';
import { PriseRendezVousComponent } from './rendez-vous/prise-rendez-vous/prise-rendez-vous.component';
import { UpdateRendezVousComponent } from './rendez-vous/update-rendez-vous/update-rendez-vous.component';

const routes: Routes = [
  {path:"patients", component:ListPatientComponent},
  {path: 'add-patient',component:AddPatientComponent},
  {path: 'update-patient',component:UpdatePatientComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'medecins',component:ListMedecinsComponent},
  {path: 'prise-rendez-vous',component:PriseRendezVousComponent},
  {path: 'liste-rendez-vous',component:ListeRendezVousComponent},
  {path:'update-rendez-vous',component:UpdateRendezVousComponent},
  {path:'liste-maladie',component:ListeMaladieComponent},
  {path: '',redirectTo: 'patients',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
