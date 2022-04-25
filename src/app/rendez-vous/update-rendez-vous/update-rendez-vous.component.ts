import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RendezVousService } from 'src/app/shared/rendez-vous.service';

@Component({
  selector: 'app-update-rendez-vous',
  templateUrl: './update-rendez-vous.component.html',
  styleUrls: ['./update-rendez-vous.component.css']
})
export class UpdateRendezVousComponent implements OnInit {
  rdvs : RendezVous[]=[];

  rendezvous : RendezVous = {} as RendezVous;
  numberOfOneRdv:number=0;
  constructor( private rdvService : RendezVousService ,
    private router:Router) { }

  ngOnInit(): void {
    this.getRdvById();
  }
   UpdateRdv(){
     console.log(this.rendezvous);
     this.rdvService.updateRdv(this.rendezvous).subscribe();
     this.router.navigate(['liste-rendez-vous']);
   }
   getRdvById(){
    if (this.rdvService.id){
      this.numberOfOneRdv=this.rdvService.id
    }
    console.log(this.numberOfOneRdv);
    this.rdvService.getRDVById(this.numberOfOneRdv).subscribe(data=>{
      this.rendezvous=data;
      console.log(data);
     
    } );
  }
}
