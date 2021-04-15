import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerFG: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerFG = new FormGroup({
      name: new FormControl('', [Validators.required]),
      wachtwoord: new FormControl('', [Validators.required]),
    });
  }
  submitUser() {}

  getErrorMessage(errors: any): string {
    if (errors.required) {
      return 'is required';
    }
  }
}
