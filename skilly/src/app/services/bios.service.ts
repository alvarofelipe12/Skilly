import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bios } from '../interfaces/bios';

@Injectable({
  providedIn: 'root',
})
export class BiosService {
  constructor(private http: HttpClient) {}

  getBios(username: String): Observable<Bios> {
    return this.http.get<Bios>(
      `https://whispering-savannah-43434.herokuapp.com/user/${username}`
    );
  }
}
