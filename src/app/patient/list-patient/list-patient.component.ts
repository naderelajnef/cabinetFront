import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { AuthentificationService } from 'src/app/shared/authentification.service';
import { PatientServiceService } from 'src/app/shared/patient-service.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patients :Patient[]=[];
  constructor(private patientService :PatientServiceService
    ,private router : Router,public loginservice :AuthentificationService) { }

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
  UpdatePatientRecord(id:number){
    console.log("id= ",id);
    this.patientService.getId(id);
    this.router.navigate(['update-patient']);
  }
  deletePatientRecord(id:number){
    this.patientService.deletePatientById(id).subscribe();
    console.log(id);
    alert("supprimer avec succés ")
    this.router.navigate(['patients']);
    window.location.reload();
  }



}
