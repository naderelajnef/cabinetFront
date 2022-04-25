import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientServiceService } from './shared/patient-service.service';
import { ListPatientComponent } from './patient/list-patient/list-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { ListMedecinsComponent } from './medecins/list-medecins/list-medecins.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { PriseRendezVousComponent } from './rendez-vous/prise-rendez-vous/prise-rendez-vous.component';
import { ListeRendezVousComponent } from './rendez-vous/liste-rendez-vous/liste-rendez-vous.component';
import { UpdateRendezVousComponent } from './rendez-vous/update-rendez-vous/update-rendez-vous.component';
import { ListeMaladieComponent } from './maladie/liste-maladie/liste-maladie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientComponent,
    UpdatePatientComponent,
    ListMedecinsComponent,
    LoginComponent,
    RegisterComponent,
    PriseRendezVousComponent,
    ListeRendezVousComponent,
    UpdateRendezVousComponent,
    ListeMaladieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PatientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
