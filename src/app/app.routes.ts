import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { CarAddComponent } from './components/car-add/car-add.component';

export const routes: Routes = [

  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/add",component:CarAddComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
