import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medecin } from '../models/medecin';
import { RendezVous } from '../models/rendez-vous';
@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private baseURL = environment.baseURL;

  constructor(private http : HttpClient) { }
  
  getMedecins():Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.baseURL +'/medecins');
  }
  
}
