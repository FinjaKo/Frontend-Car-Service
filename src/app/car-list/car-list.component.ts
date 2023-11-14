import {Component, OnInit} from '@angular/core';
import {Car} from '../car'
import {CarService} from '../car.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit() {
    this.getCars();
  }

  private getCars() {
    this.carService.getCarList().subscribe(data => {
      this.cars = data;
    });
  }

  carDetails(fin: string) {
    this.router.navigate(['car-details', fin]);
  }

  updateCar(fin: string) {
    this.router.navigate(['update-car', fin]);
  }

  deleteCar(fin: string) {
    this.carService.deleteCar(fin).subscribe(data => {
      console.log(data);
      this.getCars();
    })
  }
}
