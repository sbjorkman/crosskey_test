import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund.model';

@Injectable({
    providedIn: 'root'
})
export class FundsService {
    private apiUrl = 'https://ivarpivar.netlify.app/api';

    constructor(private http: HttpClient) { }

    getFunds(): Observable<Fund[]> {
        console.log("getFunds", this.apiUrl);
        return this.http.get<Fund[]>(this.apiUrl);
    }
}
