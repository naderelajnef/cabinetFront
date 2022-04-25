import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

private baseURL = environment.baseURL;
  id?: number;

  constructor(private http : HttpClient) { }

  getPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseURL +'/patients');
  }
  addPatient(patient : Patient ):Observable<Patient> {
    console.log(patient);
    return this.http.post<Patient>(this.baseURL + '/patients',patient);
    
  }

  //get id
 getId(getId:number){
     this.id=getId;
   }

  //get a patient byID
  getPatientById(id :number ):Observable<Patient>{
    return this.http.get<Patient>(this.baseURL +'/patient/'+id);
  }
  updatePatient(patient : Patient ):Observable<Patient> {
    console.log(patient);
    return this.http.put<Patient>(this.baseURL + '/patients/'+patient.id,patient);
  }
 //supprimer par id 
  deletePatientById(id:number):Observable<void>{
  return this.http.delete<void>(this.baseURL +'/patients/'+id);
}


}
