import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FundsService } from './funds.service';
import {NgModule} from "@angular/core";
import {FundsComponent} from "./funds/funds.component";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    FundsComponent,
    AppComponent
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
