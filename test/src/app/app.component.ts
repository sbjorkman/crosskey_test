import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Fund} from "./fund.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
})
// app.component.ts
export class AppComponent implements OnInit {
  fundDetails: any; // Holds the details of a single fund
  funds: Fund[] = []; // Holds the list of funds
  instrumentIds: string[] = ['9884', '9882', '9810']; // Add more IDs as needed

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.instrumentIds.forEach(id => {
      this.apiService.getFundById(id).subscribe(fund => {
        if (fund) {
          this.funds.push(fund);
        }
      });
    });
  }
}
