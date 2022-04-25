export class Medecin {
    id_medecin : number;
    nom : string;
    prenom:string;
    specialite:string;
    constructor(id_medecin: number , nom : string,
                prenom:string ,specialite:string){
                    this.id_medecin=id_medecin;
                    this.nom=nom;
                    this.prenom=prenom;
                    this.specialite=specialite

    }
}
export interface Medecin{
    id_medecin : number;
    nom : string;
    prenom:string;
    specialite:string;

}
