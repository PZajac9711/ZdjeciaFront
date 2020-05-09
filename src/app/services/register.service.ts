import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILogin} from '../interface/ilogin';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8080/register';

  constructor(private http: HttpClient) {
  }

  register(userNamei, password): Observable<ILogin> {
    const data: any = {
      userName: userNamei,
      userPassword: password,
      email: 'ala@wp.pl'
    };
    return this.http.post<ILogin>(this.url, data);
  }
}
