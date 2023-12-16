import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  funds: Object | undefined;
  title: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get('https://ivarpivar.netlify.app/api').subscribe((response) => {
      this.funds = response;
      console.log(this.funds);
    });
  }
}
