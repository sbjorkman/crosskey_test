import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://ivarpivar.netlify.app/api';

  constructor(private http: HttpClient) { }

  getFunds(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
