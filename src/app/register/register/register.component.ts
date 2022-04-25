import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthentificationService } from 'src/app/shared/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User = {} as User;
  msg ='';
  constructor(private apiservice : AuthentificationService) { }

  ngOnInit(): void {
    
  }
  registerUser(){
    this.apiservice.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response recieved");
        this.msg="registration successful";
      },
      error=>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
    
  }
}
