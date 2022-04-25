import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RendezVousService } from 'src/app/shared/rendez-vous.service';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.css']
})
export class ListeRendezVousComponent implements OnInit {
  rdvs : RendezVous[]=[];
   
  patient : Patient = {} as Patient;

  rendezvous : RendezVous = {} as RendezVous;
  constructor(private rdvService : RendezVousService,
              private router : Router) { }

  ngOnInit(): void {
    
    this.getRendezVous();
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
  deleteRdv(id:number){
    this.rdvService.deleteRdvById(id).subscribe();
     console.log(id);
     alert("supprimer avec succés ")
   //  this.router.navigate(['li']);
     window.location.reload();
   }
  //  UpdateRdv(){
  //   console.log(this.rendezvous);
  //   this.rdvService.updateRdv(this.rendezvous).subscribe();
  //   window.location.reload();
    
  // }
  UpdateRdvRecord(id:number){
    console.log("id= ",id);
    this.rdvService.getId(id);
    this.router.navigate(['update-rendez-vous']);
  }
}
