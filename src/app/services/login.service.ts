import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILogin} from '../interface/ilogin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {
  }

  getToken(userNamei, password): Observable<ILogin> {
    const data: any = {
      userName: userNamei,
      userPassword: password
    };
    return this.http.post<ILogin>(this.url, data);
  }
}
