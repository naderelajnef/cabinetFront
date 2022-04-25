import { Component } from '@angular/core';
import { AuthentificationService } from './shared/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cabinet-app';
  constructor(public loginservice : AuthentificationService){

  }
}
