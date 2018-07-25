import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  signin(
    email: string,
    password: string
  ): Observable<{ token: string; name: string; email: string }> {
    /*
      This will pressumably call a http backend and return the response
      return this.http.post<{{ name: string; email: string }}>(url, { email: email, password: password })
      .pipe(
        map(res => res.body)
      )
      */

    return of({
      token: 'some-token',
      name: 'Some Name',
      email: 'some@email.com'
    });
  }

  signout(): Observable<null> {
    return of(null);
  }
}
