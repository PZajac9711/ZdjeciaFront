import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IImage} from '../interface/i-image';

@Injectable({
  providedIn: 'root'
})
export class PageImagesService {
  URL = 'http://localhost:8080/page';

  constructor(private http: HttpClient) {
  }

  getImages(page): Observable<IImage[]> {
    console.log(page);
    if (page === 0) {
      return this.http.get<IImage[]>(this.URL);
    } else {
      return this.http.get<IImage[]>(this.URL + '?page=' + page);
    }
  }
}
