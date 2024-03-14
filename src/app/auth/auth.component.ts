import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSwithMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {}

  private initForm() {
    let email = '';
    let password = '';

    this.authForm = new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(password, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
