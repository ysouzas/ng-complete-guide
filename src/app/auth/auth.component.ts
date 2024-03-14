import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AuthService } from './services/auth.service';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm: FormGroup;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  onSwithMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    const { email, password } = this.authForm.value;
    this.isLoading = true;
    this.authService.signUp(email, password).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false;
      },
      (error) => {
        this.error = 'An Error occurred';
        this.isLoading = false;
      }
    );
  }

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
