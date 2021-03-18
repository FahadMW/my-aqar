import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Flat } from './flat.model';
import { IndexedDBService } from './indexedDB.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
    private http: HttpClient,
    private indexedDBService: IndexedDBService,
  ) {
    this.indexedDBService.get('fahad', 2).subscribe(res => console.log(res));
  }

  list(username: string) {
    return this.indexedDBService.list(username).pipe(map((res: Flat[]) => res.reduce((p, c) => ({...p, [c.id as number]: c as Flat}), {} as Flat)));
    return this.http.get<{[id: string]: Flat}>(`${environment.baseUrl}/${username}/flats`);
  }

  update(username: string, flat: Flat) {
    return this.indexedDBService.put(username, flat);
    // return this.http.post<{[id: string]: Flat}>(`${environment.baseUrl}/${username}/flats`, flat);
  }
  
}