import { Injectable } from '@angular/core';
import { HttpClient, /*HttpHeaders*/ } from '@angular/common/http';

import { Observable } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

import { Car } from './car';
//import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class CarService {

  private carsUrl = "http://localhost:8080/car";  // URL to web api

  /*httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };*/

  constructor(
    private http: HttpClient,
    /*private messageService: MessageService*/) {
  }

  /* /** GET cars from the server
   getCars(): Observable<Car[]> {
     return this.http.get<Car[]>(this.carsUrl)
       .pipe(
         tap(_ => this.log('fetched cars')),
         catchError(this.handleError<Car[]>('getCars', []))
       );
   }

   /** GET car by fin. Return `undefined` when id not found
   getCarsNo404<Data>(fin: string): Observable<Car> {
     const url = `${this.carsUrl}/?id=${fin}`;
     return this.http.get<Car[]>(url)
       .pipe(
         map(cars => cars[0]), // returns a {0|1} element array
         tap(h => {
           const outcome = h ? 'fetched' : 'did not find';
           this.log(`${outcome} car id=${fin}`);
         }),
         catchError(this.handleError<Car>(`getCar id=${fin}`))
       );
   }

   /** GET car by fin. Will 404 if id not found
   getCar(fin: string): Observable<Car> {
     const url = `${this.carsUrl}/${fin}`;
     return this.http.get<Car>(url).pipe(
       tap(_ => this.log(`fetched hero id=${fin}`)),
       catchError(this.handleError<Car>(`getHero id=${fin}`))
     );
   }

   /* GET cars whose brand contains search term
   searchHeroes(term: string): Observable<Car[]> {
     if (!term.trim()) {
       // if not search term, return empty hero array.
       return of([]);
     }
     return this.http.get<Car[]>(`${this.carsUrl}/?brand=${term}`).pipe(
       tap(x => x.length ?
         this.log(`found car matching "${term}"`) :
         this.log(`no cars matching "${term}"`)),
       catchError(this.handleError<Car[]>('searchCars', []))
     );
   }

   //////// Save methods //////////

   /** POST: add a new hero to the server
   addCar(car: Car): Observable<Car> {
     return this.http.post<Car>(this.carsUrl, car, this.httpOptions).pipe(
       tap((newCar: Car) => this.log(`added car w/ id=${newCar.fin}`)),
       catchError(this.handleError<Car>('addCar'))
     );
   }

   /** DELETE: delete the Car from the server
   deleteCar(fin: string): Observable<Car> {
     const url = `${this.carsUrl}/${fin}`;

     return this.http.delete<Car>(url, this.httpOptions).pipe(
       tap(_ => this.log(`deleted hero id=${fin}`)),
       catchError(this.handleError<Car>('deleteCar'))
     );
   }

   /** PUT: update the hero on the server
   updateCar(car: Car): Observable<any> {
     return this.http.put(this.carsUrl, car, this.httpOptions).pipe(
       tap(_ => this.log(`updated car id=${car.fin}`)),
       catchError(this.handleError<any>('updateCar'))
     );
   }

   /**
    * Handle Http operation that failed.
    * Let the app continue.
    *
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result

   private handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

       // TODO: send the error to remote logging infrastructure
       console.error(error); // log to console instead

       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed: ${error.message}`);

       // Let the app keep running by returning an empty result.
       return of(result as T);
     };
   }

   /** Log a HeroService message with the MessageService
   private log(message: string) {
     this.messageService.add(`CarService: ${message}`);
   }*/
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
