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
export class AppComponent implements OnInit {
  funds: Fund[] = [];
  title: string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFunds().subscribe(response => {
      console.log('API Response:', response);
      // If the funds array is nested, adjust the following line accordingly
      this.funds = response; // or response.data or another path based on the actual structure

      console.log('2. ', this.funds)
    });
  }
}
