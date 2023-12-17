import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { NgChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
      NgChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
