import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path: 'car', component: CarListComponent},
  {path: 'create-car', component: CreateCarComponent},
  {path: '', redirectTo: 'car', pathMatch: 'full'},
  {path: 'update-car/:fin', component: UpdateCarComponent},
  {path: 'car-details/:fin', component: CarDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
