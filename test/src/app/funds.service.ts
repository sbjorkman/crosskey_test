import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FundsService {

  constructor(private http: HttpClient) {
  }

  getFunds() {
    return this.http.get('https://ivarpivar.netlify.app/api');
  }

}
