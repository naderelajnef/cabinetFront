import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/models/medecin';
import { RendezVous } from 'src/app/models/rendez-vous';
import { MedecinService } from 'src/app/shared/medecin.service';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {

  medecins : Medecin[]=[];
  rdvs : RendezVous[]=[];
  rendezvous : RendezVous = {} as RendezVous;
  constructor( private medecinService: MedecinService) { }

  ngOnInit(): void {
    this.getMedecins();
   
   
    
  }
getMedecins():void {
  this.medecinService.getMedecins().subscribe(
    (response: Medecin [])=> {
      this.medecins=response;
      console.log(response);
  
    }),
    (error: HttpErrorResponse)=> {
      alert(error.message);
      
 }
}


}
