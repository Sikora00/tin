import { Component, OnInit } from '@angular/core';
import { LoginFacade } from '@tin/auth/domain';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private loginFacade: LoginFacade) {}

  ngOnInit() {}
}
