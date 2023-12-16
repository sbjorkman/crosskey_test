import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Fund} from "./fund.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'https://ivarpivar.netlify.app/api';

    constructor(private http: HttpClient) {
    }

    getFundById(id: string): Observable<any> {
        return this.http.get<any>(this.apiUrl).pipe(
            map(response => {
                console.log('API Response:', response);
                const data = response[0]?.data;
                return data ? data.find((f: any) => f.instrumentId === id) : null;
            })
        );
    }

}
