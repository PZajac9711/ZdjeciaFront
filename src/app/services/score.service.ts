import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Config} from 'codelyzer';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  url = 'http://localhost:8080/score?imageName=';

  constructor(private http: HttpClient) {
  }


  scoreImage(imageName): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.url + imageName, {observe: 'response'});
  }
}

/*
this.http
      .post<any>(this.url + imageName, {observe: 'headers'})
      .subscribe(resp => {
        console.log(resp.headers.get('actualScore'));
      });
 */
