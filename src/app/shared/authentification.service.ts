import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../models/role';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
apiURL:string='http://localhost:8080/login';
public loggedUser :string='';
public isLoggedIn:boolean=false;
public roles: Role[] = [];

  constructor( private http : HttpClient,
              private router : Router) { }


  getUserFromDB(username:string):Observable<User>{
    return this.http.get<User>(this.apiURL+'/'+username);
  }
//2éme methode pour login
  public loginUserFromRemote(user : User):Observable<User>{
    return this.http.post<User>(this.apiURL+'login',user);
  }
  //pour enregistrer a new user
  public registerUserFromRemote(user: User):Observable<User>{
    return this.http.post<User>('http://localhost:8080/registeruser',user);
  }

   logout(){
    this.isLoggedIn = false;
     //this.loggedUser=undefined;
    // this.roles=Role.name;
     localStorage.removeItem('loggedUser');
     localStorage.setItem('isloggedIn' ,String(this.isLoggedIn));
    this.router.navigate(['/login'])

   }
  signIn(user:User){
    this.loggedUser = user.username;
    this.isLoggedIn=true;
    this.roles=user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isLogIn',String (this.isLoggedIn));

  }
  isAdmin():Boolean{
    console.log("roles"+this.roles);
    let admin:Boolean=false;
    if(!this.roles)//si il n' y a pas un role
        return false;
      this.roles.forEach((curRole)=>{
                    if(curRole.nomRole =='Admin'){
                    admin =true;
                    }
                });
    return admin;
  }

  setLoggedUserFromLocalStorage(login : string ){
    this.loggedUser =login  ;
    this.isLoggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username:string){
    this.getUserFromDB(username).subscribe((user:User)=>{
    this.roles=user.roles
    });
  }
  
}
