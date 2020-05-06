import {Inject, Injectable} from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})


export class StorageJwtService {
  STORAGE_KEY = 'holderjwt';

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  public saveJwt(jwt) {
    this.storage.set(this.STORAGE_KEY, jwt);
  }

  public getJwt(): string {
    return this.storage.get(this.STORAGE_KEY);
  }
}
