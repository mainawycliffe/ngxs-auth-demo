import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngxs/store';

export class OurHttpInterceptor implements HttpInterceptor {
  constructor(private _store: Store) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // exempt some paths from authentication
    if (req.headers.get('authExempt') === 'true') {
      return next.handle(req);
    }

    const token = this._store.selectSnapshot(state => state.auth.token);

    // Clone the request to add the new header.
    const modifiedRequest = req.clone({
      headers: req.headers.set('authorization', token ? token : '')
    });

    return next.handle(modifiedRequest);
  }
}
