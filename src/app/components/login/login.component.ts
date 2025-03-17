import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public authService: AuthService) { }
}
