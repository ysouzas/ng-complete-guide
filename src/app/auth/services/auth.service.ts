import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap, throwError } from 'rxjs';

import { UntilDestroy } from '@ngneat/until-destroy';
import { environment } from '../../../environments/environment';
import { AuthResponseData, SignResponse, User, errorMessages } from '../models';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  constructor(private http: HttpClient) {
    this.user;
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${environment.signUpUrl}${environment.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError), tap(this.handleAuthentication));
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${environment.signInUrl}${environment.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError), tap(this.handleAuthentication));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    const errorMessage =
      errorMessages[errorResponse.error.error.message] ||
      'Unknown error occurred.';

    return throwError(() => errorMessage);
  }

  private handleAuthentication(res: SignResponse) {
    const expirationDate = new Date(
      new Date().getTime() + parseInt(res.expiresIn) * 1000
    );

    const user = new User(res.email, res.localId, res.idToken, expirationDate);

    this.user.next(user);
  }
}
