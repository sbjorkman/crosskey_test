import {Component, OnInit} from '@angular/core';
import {FundsService} from "../funds.service";

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
  funds: any;
  isLoading: boolean | undefined;

  constructor(private fundsService: FundsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.fundsService.getFunds().subscribe((response) => {
      this.funds = response;
      console.log(this.funds);
      this.isLoading = false;
    }, (error) => {
      this.isLoading = false;
      console.log('Error:', error);
    });
  }
}
