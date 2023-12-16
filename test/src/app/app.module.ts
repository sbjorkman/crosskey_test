import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FundsService } from './funds.service';
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {FundsComponent} from "./funds/funds.component";


@NgModule({
    declarations: [
        FundsComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
      AppComponent,
    ],
    providers: [
        FundsService,
    ],
    bootstrap: [FundsComponent],
    exports: [FundsComponent]
})
export class AppModule { }
