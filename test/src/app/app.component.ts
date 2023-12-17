import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Fund} from "./fund.model";
import {NgChartsModule} from "ng2-charts";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    NgChartsModule
  ],
})

export class AppComponent implements OnInit {
  funds: Fund[] = [];
  filteredFunds: Fund[] = [];
  openedFundId: null | string | undefined;
  public barChartData: any;
  public selectedFundType: string = '';
  public showChart: boolean = false;
  public isAllFundsSelected: boolean = true;

  constructor(private apiService: ApiService) { }

  
  ngOnInit() {
    this.apiService.getAllFunds().subscribe(funds => {
      this.funds = funds;
      this.filteredFunds = funds;
      this.isAllFundsSelected = true;
    });
  }

  filterByFundType(fundType: string) {
    this.selectedFundType = fundType;
    this.filteredFunds = fundType === '' ? this.funds : this.funds.filter(fund => fund.fundType === fundType);
    this.isAllFundsSelected = fundType === '';
    if (!this.isAllFundsSelected) {
      this.prepareChartData(this.filteredFunds);
    }
  }

  toggleFundDetails(fundId: string) {
    this.openedFundId = this.openedFundId === fundId ? null : fundId;
  }


  private prepareChartData(funds: Fund[]) {
    const chartData = funds
        .filter(fund => fund.change1m !== null && fund.change3m !== null && fund.change3y !== null)
        .map(fund => ({
          label: fund.fundName,
          data: [fund.change1m, fund.change3m, fund.change3y]
        }));

    this.showChart = chartData.length > 0;
    this.barChartData = chartData;
  }
}
