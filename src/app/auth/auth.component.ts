import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { AlertType } from '@shared/components/shared-alert/models/alert-type.model';
import { AuthResponseData } from './models';
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
  auth$: Observable<AuthResponseData> = null;
  alertType = AlertType.DANGER;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  onSwithMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    const { email, password } = this.authForm.value;
    this.isLoading = true;

    this.auth$ = this.createAuthObservable(email, password);

    this.auth$.subscribe({
      next: (res) => {
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (error: string) => {
        debugger;

        this.error = error;
        this.isLoading = false;
      },
    });
  }

  onHandleError() {
    debugger;
    this.error = null;
  }

  private createAuthObservable(email: string, password: string) {
    return this.isLoginMode
      ? this.authService.signIn(email, password)
      : this.authService.signUp(email, password);
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
