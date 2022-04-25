import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Maladie } from 'src/app/models/maladie';
import { MaladieService } from 'src/app/shared/maladie.service';

@Component({
  selector: 'app-liste-maladie',
  templateUrl: './liste-maladie.component.html',
  styleUrls: ['./liste-maladie.component.css']
})
export class ListeMaladieComponent implements OnInit {
maladies : Maladie[]=[];
maladie : Maladie ={} as Maladie;
  constructor(private maladieService : MaladieService) { }

  ngOnInit(): void {
    this.getMaladie();
  }
  getMaladie():void {
    this.maladieService.getMaladie().subscribe(
      (response: Maladie [])=> {
        this.maladies=response;
        console.log(response);
    
      }),
      (error: HttpErrorResponse)=> {
        alert(error.message);
        
   }
  }

}
