import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user : User = {} as User;
  erreur=0;

  constructor(private loginService: AuthentificationService,
              private router:Router) { }

  ngOnInit(): void {
    
    
  }
  loginUser(){
    this.loginService.loginUserFromRemote(this.user).subscribe(
      data=>console.log("response recieved"),
      error=>console.log("exception occured")
    );
    
  }
 


  onLogIn(){
    this.loginService.getUserFromDB(this.user.username).subscribe((user : User)=>{
      if(user.password==this.user.password){
        this.loginService.signIn(user);
        this.router.navigate(['/']);
      }else
      this.erreur=1;
    },(err)=>console.log(err));
      
  }
}
