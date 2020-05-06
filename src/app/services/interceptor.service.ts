import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageJwtService} from './storage-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userToken = 'secure-user-token';
    const modifiedReq = req.clone({
      setHeaders: {Authorization: 'Bearer ' + this.jwt.getJwt()}
    });
    return next.handle(modifiedReq);
  }

  constructor(private jwt: StorageJwtService) {
  }
}
