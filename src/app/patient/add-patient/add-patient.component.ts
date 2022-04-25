import { HttpErrorResponse } from '@angular/common/http';
import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { PatientServiceService } from 'src/app/shared/patient-service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patients :Patient[]=[];

  patient : Patient = {} as Patient;

  constructor( private patientService :PatientServiceService
    ,private router:Router) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients():void{
    this.patientService.getPatients().subscribe(
      (response: Patient[])=> {
        this.patients=response;
    
      }),
      (error: HttpErrorResponse)=> {
        alert(error.message);
        
      }
    
  }

  addPatient(){
    console.log(this.patient);
    this.patientService.addPatient(this.patient).subscribe();
    //aprés l'ajout on affiche la liste
    this.router.navigate(['patients']);
  }


 

updatePatient(patient: Patient):void{
  this.patientService.updatePatient(patient).subscribe(
    (response:Patient )=>{
      console.log(response);
      this.getPatients();
    }),
    (error:HttpErrorResponse)=>{
      alert(error.message);
    };
 
}

  
      
}
