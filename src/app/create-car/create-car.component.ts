// noinspection JSDeprecatedSymbols

import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['create-car.component.css']
})

export class CreateCarComponent implements OnInit {
  car: Car = new Car();

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
  }


  saveCar() {
    this.carService.createCar(this.car).subscribe(
      (createdCar: Car) => {
        console.log('Created Car:', createdCar);
        // 'Fin' is now accessible as createdCar.fin
        this.goToCarList();
      },
      error => console.log(error)
    );
  }


  goToCarList() {
    this.router.navigate(['/cars']);
  }
  onSubmit(){
    console.log(this.car);
    this.saveCar();
  }

}
