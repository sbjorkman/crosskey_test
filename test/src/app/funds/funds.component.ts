// funds.component.ts
import { Component, OnInit } from '@angular/core';
import { FundsService } from '../funds.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  funds: any;

  constructor(private fundsService: FundsService) { }

  ngOnInit() {
    this.fundsService.getFunds().subscribe((data: any) => {
      this.funds = data;
      console.log(this.funds); // This should log the data you mentioned
    });
  }
}
