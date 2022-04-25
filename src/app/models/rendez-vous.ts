import { Patient } from "./patient";

export class RendezVous {
    id_rdv:number;
    date:Date;
    heure : string;
    constructor(id_rdv:number , date:Date, heure : string){
        this.id_rdv=id_rdv;
        this.date=date;
        this.heure=heure;
    }
}
export interface RendezVous {
    id_rdv:number;
    date:Date;
    heure : string;
    patients : Patient[];
}
