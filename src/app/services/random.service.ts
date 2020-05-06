import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IImage} from '../interface/i-image';
import {StorageJwtService} from './storage-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  URL = 'http://localhost:8080/random';


  constructor(private http: HttpClient, private jwt: StorageJwtService) {
  }

  getRandomPicture(): Observable<IImage> {
    console.log(this.jwt.getJwt());
    let headers = new HttpHeaders();
    headers.append('authorization', 'esssssa');
    headers.append('Access-Control-Allow-Origin', '*');

    let options = {headers: headers};
    return this.http.get<IImage>(this.URL, options);
  }
}
