import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientServiceService } from 'src/app/shared/patient-service.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

patient : Patient = {} as Patient;
numberOfOnePatient :number=0;

  constructor(private router:Router,private patientService :PatientServiceService) { }

  ngOnInit(): void {
    this.getPatientById();
  }
  UpdatePatient(){
    console.log(this.patient);
    this.patientService.updatePatient(this.patient).subscribe();
    this.router.navigate(['patients']);
  }
  getPatientById(){
    if (this.patientService.id){
      this.numberOfOnePatient=this.patientService.id
    }
    console.log(this.numberOfOnePatient);
    this.patientService.getPatientById(this.numberOfOnePatient).subscribe(data=>{
      this.patient=data;
      console.log(data);
     
    } );
  }
}
