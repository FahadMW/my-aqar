import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Flat } from './flat.model';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {

  constructor(
    private dbService: NgxIndexedDBService
  ) {
  }

  list(username: string) {
      return this.dbService.getAll('flats');
  }

  get(username: string, id: number) {
    return this.dbService.getByKey('flats', [username, id]);
  }

  add(username: string, flat: Flat) {
    return this.dbService.add('flats', {
        username: username,
        ...flat
    });
  }

  update(username: string, flat: Flat) {
    return this.dbService.update('flats', {
        username: username,
        ...flat
    });
  }

  put(username: string, flat: Flat) {
    return this.get(username, flat.id as number).pipe(switchMap(res => res ? this.update(username, flat) : this.add(username, flat)))
  }

}