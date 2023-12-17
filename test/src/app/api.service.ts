import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'https://ivarpivar.netlify.app/api';

    constructor(private http: HttpClient) {
    }

    getAllFunds(): Observable<any> {
        return this.http.get<any>(this.apiUrl).pipe(
            map(response => {
                const data = response[0]?.data;
                return data ? data : null;
            })
        );
    }
}
