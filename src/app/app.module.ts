import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,HttpClientModule,AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Car {
  fin: string;
  brand: string;
  productionYear: number;
  electric: boolean;
}
