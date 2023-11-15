import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {ActivatedRoute} from '@angular/router';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  fin: string = "";
  car: Car = new Car();

  constructor(private route: ActivatedRoute, private carService: CarService) {
  }

  ngOnInit() {
    this.fin = this.route.snapshot.params['fin'];

    this.car = new Car();
    this.carService.getCarByFin(this.fin).subscribe(data => {
      this.car = data;
    })
  }
}
