import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginFG: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginFG = new FormGroup({
      name: new FormControl('', [Validators.required]),
      wachtwoord: new FormControl('', [Validators.required]),
    });
  }

  submitLogin() {}

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    }
  }
}
