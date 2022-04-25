import { Role } from "./role";

 export class Patient {

         id : number;
         nom :String ;
         prenom :String ;
         dateNaissance:  Date  ;
         telephone :String ;
         adresse:String ;
         socialAccount:String ;
         dossierM:number
        

         constructor(id:number, nom:string, prenom:string,
                dateNaissance: Date ,telephone:string,
                     adresse:string ,socialAccount : string,dossierM:number ){

                  this.id=id;
                  this.nom=nom;
                  this.prenom=prenom;
                  this.dateNaissance= dateNaissance;
                  this.telephone=telephone;
                  this.adresse=adresse;
                  this.socialAccount=socialAccount;
                  this.dossierM=dossierM;
                
              }
        
        
        
        
          
 }
export interface Patient{
        id : number;
        nom :String ;
        prenom :String ;
        dateNaissance: Date  ;
        telephone :String ;
        adresse:String ;
        socialAccount :String ;
        dossierM:number;

                
}
