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


  constructor(private http: HttpClient) {
  }

  getRandomPicture(): Observable<IImage> {
    return this.http.get<IImage>(this.URL);
  }
}
