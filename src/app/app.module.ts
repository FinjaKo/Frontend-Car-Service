/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
//import {DashboardComponent} from './dashboard/dashboard.component';
import {CarsComponent} from "./cars/cars.component";
//import {MessagesComponent} from "./messages/messages.component"


@NgModule({
  declarations: [
    CarsComponent,
    AppComponent,
    //DashboardComponent,
    //MessagesComponent,
    //CarDetailComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { FormsModule} from '@angular/forms';
import { UpdateCarComponent } from './update-car/update-car.component';
import { CarDetailsComponent } from './car-details/car-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CreateCarComponent,
    UpdateCarComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


