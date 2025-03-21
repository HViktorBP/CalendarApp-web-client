import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss',
  standalone: true
})
export class LogoutComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {}
}
