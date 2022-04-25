import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Maladie } from '../models/maladie';

@Injectable({
  providedIn: 'root'
})
export class MaladieService {
  private baseURL = environment.baseURL;

  constructor(private http : HttpClient) { }
  getMaladie():Observable<Maladie[]>{
    return this.http.get<Maladie[]>(this.baseURL +'/maladie');
  }
}
