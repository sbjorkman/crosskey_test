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
  funds: Fund[] = [];
  filteredFunds: Fund[] = [];
  openedFundId: null | string | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllFunds().subscribe(funds => {
      this.funds = funds;
      this.filteredFunds = funds;
    });
  }

  filterByFundType(fundType: string) {
    this.filteredFunds = fundType === '' ? this.funds : this.funds.filter(fund => fund.fundType === fundType);
  }

  toggleFundDetails(fundId: string) {
    this.openedFundId = this.openedFundId === fundId ? null : fundId;
  }
}

