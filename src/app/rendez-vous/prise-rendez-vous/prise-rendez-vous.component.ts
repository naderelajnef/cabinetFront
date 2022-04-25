import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medecin } from 'src/app/models/medecin';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RendezVousService } from 'src/app/shared/rendez-vous.service';

@Component({
  selector: 'app-prise-rendez-vous',
  templateUrl: './prise-rendez-vous.component.html',
  styleUrls: ['./prise-rendez-vous.component.css']
})
export class PriseRendezVousComponent implements OnInit {
  medecins : Medecin[]=[];
  rdvs : RendezVous[]=[];

  rendezvous : RendezVous = {} as RendezVous;

  constructor(private rdvService : RendezVousService ,
               private router:Router) { }

  ngOnInit(): void {

  }
  getRendezVous():void{
    this.rdvService.getRdv().subscribe(
      (response=>{
        this.rdvs=response;
        console.log(response);
      
      }) 
    ),(error : HttpErrorResponse)=>{
      alert(error.message);
    }
  }
  addRdv(){
    console.log(this.rendezvous);
    this.rdvService.addRendezVous(this.rendezvous).subscribe();
    //aprés l'ajout on affiche la liste
    this.router.navigate(['liste-rendez-vous']);
  }
  UpdateRdv(){
    console.log(this.rendezvous);
    this.rdvService.updateRdv(this.rendezvous).subscribe();
    
  }


}
