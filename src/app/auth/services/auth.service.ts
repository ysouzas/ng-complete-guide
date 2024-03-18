import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<Auth>(`${environment.authUrl}${environment.apiKey}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'An Error occurred';

          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage =
                'The email address is already in use by another account.';
          }

          return throwError(() => errorMessage);
        })
      );
  }
}
