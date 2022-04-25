import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RendezVous } from '../models/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private baseURL = environment.baseURL;
  id?:number
  constructor(private http : HttpClient) { }
  getRdv():Observable<RendezVous[]>{
    return this.http.get<RendezVous[]>(this.baseURL+'/rendez-vous');
  }


  getId(getId:number){
    this.id=getId;
  }
  addRendezVous(RendezVous : RendezVous ):Observable<RendezVous> {
   
    return this.http.post<RendezVous>(this.baseURL + '/rendez-vous',RendezVous);
    
  }
  getRDVById(id :number ):Observable<RendezVous>{
    return this.http.get<RendezVous>(this.baseURL +'/rendez-vous/'+id);
  }
  updateRdv(RendezVous : RendezVous):Observable<RendezVous> {
    console.log(RendezVous);
    return this.http.put<RendezVous>(this.baseURL + '/rendez-vous/'+RendezVous.id_rdv,RendezVous);
  }
  deleteRdvById(id:number):Observable<void>{
    return this.http.delete<void>(this.baseURL +'/rendez-vous/'+id);
  }
}
