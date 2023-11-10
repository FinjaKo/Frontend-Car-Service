import { Component } from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  car: Car = {
    fin: '1',
    brand: 'Porsche',
    produktionyear: 2023,
    is_electric: true
  };
}
