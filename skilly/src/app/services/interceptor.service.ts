import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor() {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify request
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
      },
    });

    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
            // http response status code
            const responseHttpStatus = Number(event.status);
            
            // verifying if there's a token error
            if (responseHttpStatus === 401) {
              console.error('auth-token error');
            }
          }
        },
        error: (error) => {
          // http response status code
          console.error(error.status);
          console.error(error.message);
          if (error instanceof HttpErrorResponse) {
            const responseHttpStatus = Number(error.status);
            return throwError(() => new Error(JSON.stringify(error)));
          } else {
            return error;
          }
        },
      })
    );
  }
}
