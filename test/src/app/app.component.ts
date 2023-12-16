import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})
export class AppComponent implements OnInit {
  funds = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getFunds().subscribe(funds => {
      this.funds = funds;
    });
  }
}
