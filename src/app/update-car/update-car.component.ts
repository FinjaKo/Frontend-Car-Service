// noinspection JSDeprecatedSymbols

import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';
import {Car} from '../car';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})

export class UpdateCarComponent implements OnInit {
  fin: string = "";
  car: Car = new Car();

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) {
  }

  /*ngOnInit() {
    this.fin = this.route.snapshot.params['fin'];
    this.carService.getCarByFin(this.fin).subscribe(data => {
      this.car = data;
    }, error => console.log(error));
  }*/
  ngOnInit() {
    this.fin = this.route.snapshot.params['fin'];
    this.carService.getCarByFin(this.fin).subscribe(
      data => {
        this.car = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  /*onSubmit() {
    this.carService.updateCar(this.fin, this.car).subscribe(data => {
        this.goToCarList();
      }
      , error => console.log(error));
  }*/

  onSubmit() {
    this.carService.updateCar(this.fin, this.car).subscribe(
      data => {
        this.goToCarList();
      },
      error => {
        console.error(error);
      }
    );
  }

  goToCarList() {
    this.router.navigate(['/cars']);
  }
}
