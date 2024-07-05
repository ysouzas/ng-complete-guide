import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

import { UntilDestroy } from '@ngneat/until-destroy';
import { environment } from '../../../environments/environment';
import { AuthResponseData, SignResponse, User, errorMessages } from '../models';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    this.user;
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  autoLogin() {
    debugger;
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
    }
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

  logout(): void {
    this.user.next(null);
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
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
