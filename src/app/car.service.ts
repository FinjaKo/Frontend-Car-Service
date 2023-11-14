import { Injectable } from '@angular/core';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Car } from './car';


@Injectable({ providedIn: 'root' })
export class CarService {

  private carsUrl = "http://localhost:8080/car";  // URL to web api


  constructor(
    private http: HttpClient) {
  }

  getCarList(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.carsUrl}`);
  }

  createEmployee(car: Car): Observable<Object> {
    return this.http.post(`${this.carsUrl}`, car);
  }

  getCarByFin(fin: string): Observable<Car>{
    return this.http.get<Car>(`${this.carsUrl}/${fin}`);
  }

  updateEmployee(fin: string, car: Car): Observable<Object>{
    return this.http.put(`${this.carsUrl}/${fin}`, car);
  }


  deleteCar(fin: string): Observable<Object>{
    return this.http.delete(`${this.carsUrl}/${fin}`);
  }
}
