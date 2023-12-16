import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FundsService } from './funds.service';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
import {FundsListComponent} from "./funds-list/funds-list.component";

@NgModule({
  declarations: [
    FundsListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    FundsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
