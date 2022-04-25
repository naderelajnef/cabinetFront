import { Role } from "./role";

export class User {
    idUser:number;
    email:String;
    password:string;
    username:string;
    roles:Role[];
    constructor(idUser:number,email:String,
                password:string , username:string,roles:Role[])
    {
                    this.idUser=idUser;
                    this.email=email;
                    this.password=password;
                    this.username=username;
                    this.roles=roles;

    }
    
}
export interface User{
    idUser:number;
    email:String;
    password:string;
    username:string;
    roles:Role[];

}
