import {Component, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create.car.html',
  styleUrls: ['create-car.css']
})

export class CreateCarComponent implements OnInit {
  car: Car = new Car();

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit() {
  }

  saveCar() {
    this.carService.createEmployee(this.car).subscribe(data => {
      console.log(data);
      this.goToCarList();
    },
      error => console.log(error));
  }
  goToCarList() {
    this.router.navigate(['/cars']);
  }
  onSubmit(){
    console.log(this.car);
    this.saveCar();
  }
}
