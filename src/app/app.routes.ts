import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path:"cars/brand/:brandId",component:CarComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
