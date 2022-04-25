export class Maladie {
    id_maladie : number;
    nom : string;
    traitement : string;
    evolution : string;
    diagnostic : string;
    dossier: number;
    constructor(id_maladie : number , nom : string,traitement : string ,
        evolution : string, diagnostic : string, dossier :number){
            this.id_maladie=id_maladie;
            this.nom=nom;
            this.traitement=traitement;
            this.evolution=evolution;
            this.diagnostic=diagnostic
            this.dossier=dossier
    }

}
export interface Maladie{
    id_maladie : number;
    nom : string;
    traitement : string;
    evolution : string;
    diagnostic : string;
    dossier: number;
}
